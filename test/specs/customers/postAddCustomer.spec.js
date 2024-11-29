import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { postAddCustomer } from "../../function/customers/postAddCustomer.js";


describe("Customers Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("POST - Add Customer", async () => {
        const response = await postAddCustomer(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Customer berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
