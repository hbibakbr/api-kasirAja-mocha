import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function postAddCategory(accessToken) {
    const payload = {
        "name": "Milky",
        "description": "Milk base"
    }
    
    const response = await request(baseUrl)
        .post("/categories")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}