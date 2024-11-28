import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getUnitList } from "../../function/units/getUnitList.js";

describe("User Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("GET - User List", async () => {
        const response = await getUnitList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });
});
