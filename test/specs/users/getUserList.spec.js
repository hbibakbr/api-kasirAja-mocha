import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getListUser } from "../../function/users/getUserList.js";
import { loginSuccessful } from "../../function/authentication/postLoginSuccessful.js";

describe("User Management", () => {
    let accessToken;

    it("GET - List Users", async () => {
        // Get Access Token
        // const jsonData = await loginSuccessful();
        // accessToken = (await jsonData).body.data.accessToken;
        
        accessToken = await getAccessToken();
        const response = await getListUser(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    }).timeout(10000)
});
