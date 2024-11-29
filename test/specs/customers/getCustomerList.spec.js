import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getCustomerList } from "../../function/customers/getCustomerList.js";

describe("Customers Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("GET - Customer List", async () => {
        const response = await getCustomerList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });
});
