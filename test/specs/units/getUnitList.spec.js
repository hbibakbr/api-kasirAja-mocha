import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getUnitList } from "../../function/units/getUnitList.js";

describe("User Management", () => {
    let accessToken;

    it("GET - User List", async () => {
        accessToken = await getAccessToken();
        const response = await getUnitList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    }).timeout(10000)
});
