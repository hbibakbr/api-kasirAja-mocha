import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { putUpdateCustomer } from "../../function/customers/putUpdateCustomer.js";

describe("Customers Management", () => {
    let accessToken;
    let customerId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("PUT - Update Customer", async () => {
        customerId = 'ea5c0843-ac8a-4f00-b956-4917b884d0b7';
        const response = await putUpdateCustomer(customerId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    })
});
