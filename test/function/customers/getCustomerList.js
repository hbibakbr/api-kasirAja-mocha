import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getCustomerList(accessToken) {

    const response = await request(baseUrl)
        .get("/customers")
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}