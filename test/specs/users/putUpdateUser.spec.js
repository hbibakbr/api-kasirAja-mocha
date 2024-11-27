import { expect } from "chai";
import { putUpdateUser } from "../../function/users/putUpdateUser.js";
import { getAccessToken } from "../../helper/getAccessToken.js";

describe("User Management", () => {
    let accessToken;
    let userId;

    it("PUT - Update User", async () => {
        accessToken = await getAccessToken()
        userId = '691df08c-236e-46fc-b933-94f3c3d088f1';

        const expectedName = 'habib-update'
        const response = await putUpdateUser(userId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.message).to.equal('User berhasil diupdate');
        expect((await response).body.data.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    }).timeout(10000)
});
