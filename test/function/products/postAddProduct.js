import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function postAddProduct(espressoId, accessToken) {
    const payload = {
        "category_id" : `${espressoId}`,
        "code": "KP-01",
        "name": "Kopsus Pandan",
        "price": "14000",
        "cost": "9000",
        "stock": "15"
    }
    
    const response = await request(baseUrl)
        .post("/products")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}