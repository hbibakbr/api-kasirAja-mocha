import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { putUpdateProduct } from "../../function/products/putUpdateProduct.js";


describe("Products Management", () => {
    let accessToken;
    let productId;
    let espressoId

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("PUT - Update Product", async () => {
        productId = '6c6d1720-bf84-45da-96bf-b54063d88d58';
        espressoId = '08a10107-e0de-4275-b705-8ca5e233add7'
        const response = await putUpdateProduct(espressoId, productId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    })
});
