import { expect } from "chai";
import { putUpdateUser } from "../../function/users/putUpdateUser.js";

describe("User Management", () => {

    it("PUT - Update User", async () => {
        const expectedName = 'akbar-update'
        const response = await putUpdateUser();

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.message).to.equal('User berhasil diupdate');
        expect((await response).body.data.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    }).timeout(10000)
});
