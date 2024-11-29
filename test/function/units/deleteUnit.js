import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function deleteUnit(unitId, accessToken) {
    const response = await request(baseUrl)
        .delete(`/units/${unitId}`)
        .set("Authorization", `Bearer ${accessToken}`)

    return response
}