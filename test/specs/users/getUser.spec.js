import { expect } from "chai";
import { getUser } from "../../function/users/getUser.js";

describe("User Management", () => {
    
    it("GET - User Detail", async () => {
        const expectedUserId = '128b1ecf-e5d8-4e9b-b798-ac0011d2c386'
        const response = await getUser();

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.user.id).to.equal(expectedUserId);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data.user);
    }).timeout(10000)
});
