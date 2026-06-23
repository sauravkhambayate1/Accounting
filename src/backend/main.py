from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from email.message import EmailMessage
import smtplib
import os
import shutil
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

# ----------------------------
# CORS
# ----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Config
# ----------------------------
UPLOAD_DIR = "resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Your Gmail
SENDER_EMAIL = os.getenv("SENDER_EMAIL")
APP_PASSWORD = os.getenv("APP_PASSWORD")
HR_EMAIL = os.getenv("HR_EMAIL")

print("EMAIL:", SENDER_EMAIL)
print("HR:", HR_EMAIL)
# ----------------------------
# Health Check
# ----------------------------
@app.get("/")
def home():
    return {"message": "Career API Running Successfully"}


# ----------------------------
# Apply Endpoint
# ----------------------------
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

        # ----------------------------
        # Save Resume
        # ----------------------------
        file_path = os.path.join(
            UPLOAD_DIR,
            resume.filename
        )

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(resume.file, buffer)

        # ----------------------------
        # Email Body
        # ----------------------------
        email_message = EmailMessage()

        email_message["Subject"] = (
            f"New Job Application - {from_name}"
        )

        email_message["From"] = SENDER_EMAIL
        email_message["To"] = HR_EMAIL
        email_message["Reply-To"] = from_email

        email_message.set_content(
            f"""
New Job Application Received

Candidate Name: {from_name}

Email: {from_email}

Phone: {phone}

Position Applied For: {position}

Experience: {experience}

Message:
{message}
"""
        )

        # ----------------------------
        # Attach Resume
        # ----------------------------
        with open(file_path, "rb") as f:
            email_message.add_attachment(
                f.read(),
                maintype="application",
                subtype="octet-stream",
                filename=resume.filename
            )

        # ----------------------------
        # Send Email
        # ----------------------------
        with smtplib.SMTP_SSL(
            "smtp.gmail.com",
            465
        ) as smtp:

            smtp.login(
                SENDER_EMAIL,
                APP_PASSWORD
            )

            smtp.send_message(email_message)

        # ----------------------------
        # Delete File After Sending
        # ----------------------------
        if os.path.exists(file_path):
            os.remove(file_path)

        return {
            "success": True,
            "message": "Application submitted successfully"
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }


# ----------------------------
# Run Server
# ----------------------------
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000
    )