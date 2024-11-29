import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { postAddProduct } from "../../function/products/postAddProduct.js";



describe("Products Management", () => {
    let accessToken;
    let espressoId

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("POST - Add Product", async () => {
        espressoId = "08a10107-e0de-4275-b705-8ca5e233add7";
        const response = await postAddProduct(espressoId, accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Product berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
