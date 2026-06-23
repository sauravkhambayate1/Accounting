from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import requests
import os
import base64

load_dotenv()

app = FastAPI()

# ----------------------------
# CORS
# ----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Environment Variables
# ----------------------------
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
HR_EMAIL = os.getenv("HR_EMAIL")


@app.get("/")
def home():
    return {
        "message": "Career API Running Successfully"
    }


@app.post("/apply")
async def apply_job(
    from_name: str = Form(...),
    from_email: str = Form(...),
    phone: str = Form(...),
    position: str = Form(...),
    experience: str = Form(...),
    message: str = Form(...),
    resume: UploadFile = File(...)
):
    try:

        # Read uploaded file
        file_content = await resume.read()

        # Convert file to Base64
        encoded_file = base64.b64encode(
            file_content
        ).decode("utf-8")

        # Send Email via Resend
        response = requests.post(
            "https://api.resend.com/emails",
            headers={
                "Authorization": f"Bearer {RESEND_API_KEY}",
                "Content-Type": "application/json",
            },
            json={
                "from": "onboarding@resend.dev",
                "to": [HR_EMAIL],
                "subject": f"New Job Application - {from_name}",
                "html": f"""
                <h2>New Job Application</h2>

                <p><strong>Name:</strong> {from_name}</p>

                <p><strong>Email:</strong> {from_email}</p>

                <p><strong>Phone:</strong> {phone}</p>

                <p><strong>Position:</strong> {position}</p>

                <p><strong>Experience:</strong> {experience}</p>

                <p><strong>Message:</strong></p>

                <p>{message}</p>
                """,
                "attachments": [
                    {
                        "filename": resume.filename,
                        "content": encoded_file
                    }
                ]
            }
        )

        if response.status_code not in [200, 201]:
            return {
                "success": False,
                "error": response.text
            }

        return {
            "success": True,
            "message": "Application submitted successfully"
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }