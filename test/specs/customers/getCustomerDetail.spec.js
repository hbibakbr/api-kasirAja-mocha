import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getCustomerDetail } from "../../function/customers/getCustomerDetail.js";


describe("Customers Management", () => {
    let accessToken;
    let customerId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("GET - Customer Detail", async () => {
        customerId = '561be175-8184-4a73-96bd-bdf343040790';
        const response = await getCustomerDetail(customerId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});