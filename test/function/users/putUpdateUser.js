import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function putUpdateUser(userId, accessToken) {

    const payload = {
        "name": "akbar-update",
        "email": "akbar@example.com",
    }
    
    const response = await request(baseUrl)
        .put(`/users/${userId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}