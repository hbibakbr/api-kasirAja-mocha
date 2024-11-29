import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function getUnitDetail(unitId, accessToken) {

    const response = await request(baseUrl)
        .get(`/units/${unitId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .set("Content-Type", "application/json")

    return response
}