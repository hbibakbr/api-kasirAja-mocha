import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { postCreateUser } from "../../function/users/postCreateUser.js";

describe("User Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("POST - Create User", async () => {
        const response = await postCreateUser(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('User berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
