import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function loginSuccessful() {
    const payload = {    
        "email": "testerakbar@test.com",
        "password": "Pasword123"
    }

    const response = await request(baseUrl)
        .post("/authentications")
        .send(payload)

    return response
}