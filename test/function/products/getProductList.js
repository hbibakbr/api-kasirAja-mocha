import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getProductList(accessToken) {

    const response = await request(baseUrl)
        .get("/products")
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}