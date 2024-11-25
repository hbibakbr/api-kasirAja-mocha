import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getUser(userId, accessToken) {
    
    const response = await request(baseUrl)
        .get(`/users/${userId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return response
}