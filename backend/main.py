"""from fastapi import FastAPI, UploadFile, File, Form 
from fastapi import HTTPException
from dotenv import load_dotenv
import base64, mimetypes, shutil
from bson import ObjectId
from mongo import collection
from imagescript import imgscript

app= FastAPI

os,makedirs("uploads",exist_ok=True)

@app.post("/items")
async def create_item(name:str =Form(...),
    condition: str= Form(...),
    quantity: int = Form(...),
    price: float =Form(...),
    image_file: UploadFile = File(...)):

    contents= await image_file.read()
    file_location = f"uploads/{image_file.filename}"
    with open(file_location,"wb")as buffer:
        shutil.copyfileobj(image_file.file,buffer)

    
    try:
        details = imgscript(img_b64, mime_type)
    except Exception as e:
        return {"error": f"Gemini extraction failed: {e}"}

    item_dict = details.model_dump()
    item_dict["quantity"] = quantity
    item_dict["price"] = price
    item_dict["image_path"] = f"/{file_location}"

    try:
        result = collection.insert_one(item_dict)
    except Exception as e:
        return {"error": f"Database save failed: {e}"}

    item_dict["id"] = str(result.inserted_id)
    return item_dict


@app.get("/items")
async def get_items():
    items = list(collection.find({}))
    for item in items:
        item["id"] = str(item.pop("_id"))
    return items


@app.get("/items/{item_id}")
async def get_item(item_id: str):
    item = collection.find_one({"_id": ObjectId(item_id)})
    if not item:
        return {"error": "not found"}
    item["id"] = str(item.pop("_id"))
    return item

"""


from fastapi import FastAPI, UploadFile, File, Form
from fastapi import HTTPException
from dotenv import load_dotenv
import base64, mimetypes, shutil, os
from bson import ObjectId
from mongo import collection
from imagescript import imgscript

app = FastAPI()

os.makedirs("uploads", exist_ok=True)

@app.post("/items")
async def create_item(name: str = Form(...),
    condition: str = Form(...),
    quantity: int = Form(...),
    price: float = Form(...),
    image_file: UploadFile = File(...)):

    contents = await image_file.read()
    file_location = f"uploads/{image_file.filename}"
    with open(file_location, "wb") as buffer:
        await image_file.seek(0)
        shutil.copyfileobj(image_file.file, buffer)

    img_b64 = base64.b64encode(contents).decode("utf-8")
    mime_type, _ = mimetypes.guess_type(image_file.filename)

    try:
        details = imgscript(img_b64, mime_type)
    except Exception as e:
        return {"error": f"Gemini extraction failed: {e}"}

    item_dict = details.model_dump()
    item_dict["quantity"] = quantity
    item_dict["price"] = price
    item_dict["image_path"] = f"/{file_location}"

    try:
        result = collection.insert_one(item_dict)
    except Exception as e:
        return {"error": f"Database save failed: {e}"}

    item_dict["id"] = str(result.inserted_id)
    return item_dict


@app.get("/items")
async def get_items():
    items = list(collection.find({}))
    for item in items:
        item["id"] = str(item.pop("_id"))
    return items


@app.get("/items/{item_id}")
async def get_item(item_id: str):
    item = collection.find_one({"_id": ObjectId(item_id)})
    if not item:
        return {"error": "not found"}
    item["id"] = str(item.pop("_id"))
    return item