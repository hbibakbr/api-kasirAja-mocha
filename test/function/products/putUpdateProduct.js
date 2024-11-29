import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function putUpdateProduct(espressoId, productId, accessToken) {
    const payload = {
        "category_id" : `${espressoId}`,
        "code": "GA-01",
        "name": "Kopsus Gula Aren",
        "price": "12000",
        "cost": "8000",
        "stock": "12"
    }
    
    const response = await request(baseUrl)
        .put(`/products/${productId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}