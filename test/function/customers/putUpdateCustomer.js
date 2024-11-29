import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function putUpdateCustomer(customerId, accessToken) {

    const payload = {
        "name": "Akbar",
        "phone": "081223334556",
        "address": "Purwokerto",
        "description": "Mahasiswa - VIP"
    }
    
    const response = await request(baseUrl)
        .put(`/customers/${customerId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}