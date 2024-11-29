import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function postLoginUnsuccessful() {
    const payload = {    
        "email": "testerakbar@test.com",
        "password": "Pasword"
    }

    const response = await request(baseUrl)
        .post("/authentications")
        .send(payload)

    return response
}