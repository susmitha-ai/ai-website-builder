from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Import ONLY local generator
from generator import generate_website_json

print("MAIN.PY RESET ACTIVE")

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PromptRequest(BaseModel):
    prompt: str


@app.get("/")
def home():
    return {
        "message": "AI Website Builder Backend Running Successfully"
    }


@app.post("/generate")
def generate(request: PromptRequest):
    return generate_website_json(request.prompt)