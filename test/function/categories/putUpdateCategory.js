import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function putUpdateCategory(categoryId, accessToken) {

    const payload = {
        "name": "Update-Milky",
        "description": "Milk base"
    }
    
    const response = await request(baseUrl)
        .put(`/categories/${categoryId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}