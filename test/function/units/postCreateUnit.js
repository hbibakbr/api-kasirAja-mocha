import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function postCreateUnit(accessToken) {
    const payload = {
        "name": "gram",
        "description": "weight measurement"
    }
    
    const response = await request(baseUrl)
        .post("/units")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}