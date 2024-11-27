import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getUserList(accessToken) {

    const response = await request(baseUrl)
        .get("/users")
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}