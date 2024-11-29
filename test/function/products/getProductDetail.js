import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getProductDetail(productId, accessToken) {

    const response = await request(baseUrl)
        .get(`/products/${productId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return response
}