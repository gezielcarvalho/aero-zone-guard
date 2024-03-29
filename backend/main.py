from fastapi import FastAPI
from starlette.responses import RedirectResponse
from api import users
from db.db_setup import engine
from db.models import user

user.Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Aero-Zone Guard",
    description="Analysis of construction projects impact on Aviation Safety",
    version="1.0.0",
    terms_of_service="https://gezielcarvalho.info/terms/",
    contact={"name": "Geziel Carvalho", "email": "geziel.natal@gmail.com"},
    license_info={
        "name": "MIT",
    }
)


@app.get("/", include_in_schema=False)
def read_root():
    return RedirectResponse(url='/docs')


app.include_router(router=users.router)
