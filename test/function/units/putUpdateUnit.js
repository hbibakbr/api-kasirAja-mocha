import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function putUpdateUnit(unitId, accessToken) {

    const payload = {
        "name": "update-gram",
        "description": "weight measurement"
    }
    
    const response = await request(baseUrl)
        .put(`/units/${unitId}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(payload)

    return response
}