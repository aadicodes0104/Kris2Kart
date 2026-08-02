from pydantic import BaseModel
from typing import Optional


class ItemDescription(BaseModel):
    name: str= Field(
        description="provide an accurate name for the object"
    )
    category: str= Field(
        description="Categorize the object under a dedicated category"
    )
    condition: str= Field(
        description="Assess the conditoin of the object and provide a suitable adjective based on its condition"
    )
    color: Optional[str]= None | Field(
        desccription="Prescribe a color for the object"
    )