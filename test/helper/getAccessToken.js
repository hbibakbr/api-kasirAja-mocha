import request from "supertest";
import { baseUrl } from "../data/config.js"

export async function getAccessToken() {
    const payload = {    
        "email": "testerakbar@test.com",
        "password": "Pasword123"
    }

    const response = await request(baseUrl)
        .post("/authentications")
        .send(payload)

    const accessToken = (await response).body.data.accessToken

    return accessToken
}
