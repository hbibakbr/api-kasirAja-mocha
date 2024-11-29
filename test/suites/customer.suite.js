import { expect } from "chai";
import { before } from "mocha";
import { getAccessToken } from "../helper/getAccessToken.js";
import { postAddCustomer } from "../function/customers/postAddCustomer.js"
import { getCustomerDetail } from "../function/customers/getCustomerDetail.js"
import { getCustomerList } from "../function/customers/getCustomerList.js";
import { putUpdateCustomer } from "../function/customers/putUpdateCustomer.js";
import { deleteCustomer } from "../function/customers/deleteCustomer.js";

describe("End to End Customer Management", () => {
    let accessToken;
    let customerId;

    before(async function () {
        accessToken = await getAccessToken();
    });

    it("POST - Add Customer", async () => {
        const response = await postAddCustomer(accessToken);
        customerId = response.body.data.customerId;

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Customer berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - Customer Detail", async () => {
        const response = await getCustomerDetail(customerId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - Customer List", async () => {
        const response = await getCustomerList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });

    it("PUT - Update Customer", async () => {
        const response = await putUpdateCustomer(customerId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("DELETE - Customer", async () => {
        const response = await deleteCustomer(customerId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data).to.be.an('object').that.is.empty;

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
})