FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY api api 

CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8080"]
