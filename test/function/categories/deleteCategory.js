import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function deleteCategory(categoryId, accessToken) {
    const response = await request(baseUrl)
        .delete(`/categories/${categoryId}`)
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}