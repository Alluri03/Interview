from fastapi import FastAPI
app=FastAPI()
@app.get('/')
async def r(): return {'ok':True}
