import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health():
    r = client.get('/health')
    assert r.status_code == 200 and r.json()['ok'] is True

def test_create_and_list():
    # create
    r = client.post('/tasks', json={'title':'Write tests'})
    assert r.status_code == 201
    tid = r.json()['id']

    # duplicate should fail
    r2 = client.post('/tasks', json={'title':'write tests'})  # case-insensitive dup
    assert r2.status_code == 400

    # list all
    r3 = client.get('/tasks')
    assert r3.status_code == 200 and len(r3.json()) >= 1

    # toggle completion
    r4 = client.patch(f'/tasks/{tid}/toggle')
    assert r4.status_code == 200 and r4.json()['completed'] is True

    # filter completed true
    r5 = client.get('/tasks', params={'completed': True})
    assert r5.status_code == 200
    assert any(t['completed'] is True for t in r5.json())

def test_toggle_not_found():
    r = client.patch('/tasks/9999/toggle')
    assert r.status_code == 404
