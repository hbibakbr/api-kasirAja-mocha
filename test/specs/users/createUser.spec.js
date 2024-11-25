import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { createUser } from "../../function/users/createUser.js";

describe("User Management", () => {
    let accessToken;

    it("POST - Create User", async () => {
        // Get Access Token  
        accessToken = await getAccessToken();
        const response = await createUser(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('User berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    }).timeout(10000)
});
