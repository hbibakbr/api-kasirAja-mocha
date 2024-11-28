import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getUserList } from "../../function/users/getUserList.js";

describe("User Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("GET - User List", async () => {
        // Get Access Token
        // const jsonData = await loginSuccessful();
        // accessToken = (await jsonData).body.data.accessToken;
        const response = await getUserList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });
});
