import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getCustomerDetail(customerId, accessToken) {

    const response = await request(baseUrl)
        .get(`/customers/${customerId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return response
}