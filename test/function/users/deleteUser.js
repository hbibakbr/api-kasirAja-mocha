import request from "supertest";
import { baseUrl } from "../../data/config.js"
import { getAccessToken } from "../../helper/getAccessToken.js";

export async function deleteUser() {
    let accessToken = await getAccessToken();
    const userId = '65a02db8-20ad-4bc1-bb85-5d416d955adf';

    const response = await request(baseUrl)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}