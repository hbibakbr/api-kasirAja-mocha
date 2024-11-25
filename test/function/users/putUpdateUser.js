import request from "supertest";
import { baseUrl } from "../../data/config.js"
import { getAccessToken } from "../../helper/getAccessToken.js";

export async function putUpdateUser() {
    const userId = '65a02db8-20ad-4bc1-bb85-5d416d955adf';
    let accessToken = await getAccessToken();

    const payload = {
        "name": "akbar-update",
        "email": "akbar@example.com",
    }
    
    const response = await request(baseUrl)
        .put(`/users/${userId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}