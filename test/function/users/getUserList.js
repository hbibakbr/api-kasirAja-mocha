import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getListUser(accessToken) {

    const response = await request(baseUrl)
        .get("/users")
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return response
}