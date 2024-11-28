import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getUnitList(accessToken) {

    const response = await request(baseUrl)
        .get("/units")
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}