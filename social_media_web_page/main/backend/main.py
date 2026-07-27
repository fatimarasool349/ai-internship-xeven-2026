from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import os
import shutil
import sys
from dotenv import load_dotenv
import traceback
from langchain_community.document_loaders import PyPDFLoader


load_dotenv(r"D:\xeven_intership\web_page\main\.env")

# ==========================================
# CHANGE THIS TO YOUR CREWAI PROJECT PATH
# ==========================================
sys.path.append(r"D:\social_media_crew\src")

# CHANGE THIS IMPORT IF YOUR PACKAGE NAME IS DIFFERENT
from social_media_content_automation.crew import SocialMediaContentAutomationCrew

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.post("/generate")
async def generate_content(
    industry: str = Form(...),
    brand_name: str = Form(...),
    brand_file: UploadFile = File(...)
):
    try:
        # Save uploaded file
        file_path = os.path.join(UPLOAD_FOLDER, brand_file.filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(brand_file.file, buffer)
            # Read PDF content
            loader = PyPDFLoader(file_path)
            docs = loader.load()

            brand_content = "\n\n".join(
                doc.page_content for doc in docs
        )

        # Run CrewAI locally
        # result = (
        #     SocialMediaContentAutomationCrew()
        #     .crew()
        #     .kickoff(
        #         inputs={
        #             "industry": industry,
        #             "brand_name": brand_name,
        #             "brand_file": file_path
        #         }
        #     )
        # )
        crew = SocialMediaContentAutomationCrew().crew()

        result = await crew.kickoff_async(
        inputs={
            "industry": industry,
            "brand_name": brand_name,
            "brand_content": brand_content
            }
        )
        print("CrewAI Result:", result)
        print("Result Type:", type(result))

        return {
            "success": True,
            "content": str(result)
        }

    except Exception as e:

        print("\n========== FULL EXCEPTION ==========")
        traceback.print_exc()
        print("====================================\n")

        return {
            "success": False,
            "error": str(e),
            "type": type(e).__name__
    }