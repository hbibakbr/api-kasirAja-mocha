import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function deleteProduct(productId, accessToken) {
    const response = await request(baseUrl)
        .delete(`/products/${productId}`)
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}