import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function postAddCustomer(accessToken) {
    const payload = {
        "name": "Habib",
        "phone": "081223334556",
        "address": "Purwokerto",
        "description": "Mahasiswa"
    }
    
    const response = await request(baseUrl)
        .post("/customers")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}