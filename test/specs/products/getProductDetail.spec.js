import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getProductDetail } from "../../function/products/getProductDetail.js";



describe("Products Management", () => {
    let accessToken;
    let productId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("GET - Product Detail", async () => {
        productId = '6c6d1720-bf84-45da-96bf-b54063d88d58';
        const response = await getProductDetail(productId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});