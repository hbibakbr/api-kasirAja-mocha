import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { putUpdateUnit } from "../../function/units/putUpdateUnit.js";

describe("Unit Management", () => {
    let accessToken;
    let unitId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("PUT - Update Unit", async () => {
        unitId = '3f151e07-6b88-4f4f-8b8c-235f8002611a';
        const expectedName = 'update-gram';
        const response = await putUpdateUnit(unitId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    })
});
