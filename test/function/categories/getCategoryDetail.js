import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getCategoryDetail(categoryId, accessToken) {

    const response = await request(baseUrl)
        .get(`/categories/${categoryId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return response
}