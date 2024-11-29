import { expect } from "chai";
import { getUser } from "../../function/users/getUser.js";
import { getAccessToken } from "../../helper/getAccessToken.js";

describe("User Management", () => {
    let accessToken;
    let userId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("GET - User Detail", async () => {
        userId = '128b1ecf-e5d8-4e9b-b798-ac0011d2c386'
        const response = await getUser(userId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.user.id).to.equal(userId);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data.user)
    });
});
;