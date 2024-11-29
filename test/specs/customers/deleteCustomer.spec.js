import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { deleteCustomer } from "../../function/customers/deleteCustomer.js";


describe("Customers Management", () => {
    let accessToken;
    let customerId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("DELETE - Customer", async () => {
        customerId = 'b2e76c47-7256-4973-b359-7155b9feb111';
        const response = await deleteCustomer(customerId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data).to.be.an('object').that.is.empty;

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
