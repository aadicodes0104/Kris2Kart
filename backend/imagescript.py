from google import genai
from dotenv import load_dotenv
from mainmodel import  ItemDescription

load_dotenv()


def imgscript(img_b64: str, mime_type:str) -> ItemDescription:
        try:
            client = genai.client()
            interaction=client.interactions.create(
                model="gemini-3.6-flash",
                input=[
                    {
                        "type":"text",
                        "text": "extract the details of the given object in the image"
                    },
                    {
                        "type":"image",
                        "data":img_b64,
                        "mime_type":"image/jpeg"
                    },
                ],
                response_format=
                    {
                        "type": "text",
                        "mime_type":"application/json",
                        "schema": ItemDescription.model_json_schema()
                    },

                
            )     
            return ItemDescription.model_validate_json(interaction.output.text)


        except Exception as e:
            print(type(e))
            print(f"API error: {e}")
            raise