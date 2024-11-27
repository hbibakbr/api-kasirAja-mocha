import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function deleteUser(userId, accessToken) {
    const response = await request(baseUrl)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}