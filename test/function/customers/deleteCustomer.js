import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function deleteCustomer(customerId, accessToken) {
    const response = await request(baseUrl)
        .delete(`/customers/${customerId}`)
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}