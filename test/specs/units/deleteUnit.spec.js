import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { deleteUnit } from "../../function/units/deleteUnit.js";

describe("Unit Management", () => {
    let accessToken;
    let unitId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("DELETE - Unit", async () => {
        unitId = '3f151e07-6b88-4f4f-8b8c-235f8002611a';
        const response = await deleteUnit(unitId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data).to.be.an('object').that.is.empty;

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
