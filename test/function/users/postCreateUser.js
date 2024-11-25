import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function postCreateUser(accessToken) {
    const payload = {
        "name": "akbar",
        "email": "akbar@example.com",
        "password": "Password123"
    }
    
    const response = await request(baseUrl)
        .post("/users")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}