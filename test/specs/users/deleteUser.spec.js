import { expect } from "chai";
import { deleteUser } from "../../function/users/deleteUser.js";
import { getAccessToken } from "../../helper/getAccessToken.js";

describe("User Management", () => {
    let accessToken;
    let userId;

    it("DELETE - User", async () => {
        accessToken = await getAccessToken();
        userId = 'xxxx'
        const response = await deleteUser(userId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.message).to.equal('User berhasil dihapus');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    }).timeout(10000)
});
