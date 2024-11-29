import { getAccessToken } from "../../helper/getAccessToken.js";
import { getUnitDetail } from "../../function/units/getUnitDetail.js";
import { expect } from "chai";

describe("Unit Management", () => {
    let accessToken;
    let unitId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("Get - Unit Detail", async () => {
        unitId = 'd22f07b4-c52d-4f4a-8d10-67009e46669f';
        const response = await getUnitDetail(unitId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});