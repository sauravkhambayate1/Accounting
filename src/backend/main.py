from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import requests
import os
import base64

# ----------------------------
# Load Environment Variables
# ----------------------------
load_dotenv()

# ----------------------------
# FastAPI App
# ----------------------------
app = FastAPI()

# ----------------------------
# CORS
# ----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change after frontend deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------
# Environment Variables
# ----------------------------
RESEND_API_KEY = os.getenv("RESEND_API_KEY")
HR_EMAIL = os.getenv("HR_EMAIL")


# ----------------------------
# Email Template
# ----------------------------
def get_job_application_template(
    from_name,
    from_email,
    phone,
    position,
    experience,
    message
):
    return f"""
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>

body {{
    background: #f4f6f9;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}}

.container {{
    max-width: 700px;
    margin: auto;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
}}

.header {{
    background: #0f172a;
    color: white;
    padding: 20px;
}}

.content {{
    padding: 20px;
}}

table {{
    width: 100%;
    border-collapse: collapse;
}}

td {{
    border: 1px solid #e5e7eb;
    padding: 12px;
}}

.label {{
    font-weight: bold;
    width: 35%;
}}

.message-box {{
    background: #f8fafc;
    padding: 15px;
    border-radius: 6px;
}}

.footer {{
    padding: 20px;
    text-align: center;
    font-size: 12px;
    color: #6b7280;
}}

</style>

</head>

<body>

<div class="container">

<div class="header">
<h2>New Job Application Received</h2>
</div>

<div class="content">

<table>

<tr>
<td class="label">Candidate Name</td>
<td>{from_name}</td>
</tr>

<tr>
<td class="label">Email</td>
<td>{from_email}</td>
</tr>

<tr>
<td class="label">Phone</td>
<td>{phone}</td>
</tr>

<tr>
<td class="label">Position Applied</td>
<td>{position}</td>
</tr>

<tr>
<td class="label">Experience</td>
<td>{experience}</td>
</tr>

</table>

<br>

<h3>Candidate Message</h3>

<div class="message-box">
{message}
</div>

</div>

<div class="footer">
Resume Attached With This Email
</div>

</div>

</body>
</html>
"""


# ----------------------------
# Health Check
# ----------------------------
@app.get("/")
def home():
    return {
        "message": "Career API Running Successfully"
    }


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

        # Read uploaded resume
        file_content = await resume.read()

        # Convert file to base64
        encoded_file = base64.b64encode(
            file_content
        ).decode("utf-8")

        # Generate email template
        html_content = get_job_application_template(
            from_name,
            from_email,
            phone,
            position,
            experience,
            message
        )

        # Send Email
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
                "html": html_content,
                "attachments": [
                    {
                        "filename": resume.filename,
                        "content": encoded_file,
                    }
                ],
            },
            timeout=30
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


# ----------------------------
# Run App
# ----------------------------
if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000
    )