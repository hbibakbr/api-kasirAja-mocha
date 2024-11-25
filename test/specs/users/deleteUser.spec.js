import { expect } from "chai";
import { deleteUser } from "../../function/users/deleteUser.js";

describe("User Management", () => {
    
    it("DELETE - User", async () => {
        const response = await deleteUser();

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.message).to.equal('User berhasil dihapus');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    }).timeout(10000)
});
