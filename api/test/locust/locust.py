import time
from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 2.5)

    @task
    def me_api(self):
        self.client.get("/user/me")

    # must create user in in memory db
    def on_start(self):
        self.client.post("/register", json={"username":"foo", "password":"bar", "firstName":"Rob","lastName":"Bert","email":"rbert@r.com"})