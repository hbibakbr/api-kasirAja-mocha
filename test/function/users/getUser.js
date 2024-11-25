import request from "supertest";
import { baseUrl } from "../../data/config.js"
import { getAccessToken } from "../../helper/getAccessToken.js";

export async function getUser() {
    let accessToken = await getAccessToken();
    const userId = '128b1ecf-e5d8-4e9b-b798-ac0011d2c386';

    const response = await request(baseUrl)
        .get(`/users/${userId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return response
}