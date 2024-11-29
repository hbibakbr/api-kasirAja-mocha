import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getCategoryList(accessToken) {

    const response = await request(baseUrl)
        .get("/categories")
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}