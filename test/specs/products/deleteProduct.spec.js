import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { deleteProduct } from "../../function/products/deleteProduct.js";


describe("Products Management", () => {
    let accessToken;
    let productId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("DELETE - Product", async () => {
        productId = '940fa077-c904-4f3c-9219-d51813d63b28';
        const response = await deleteProduct(productId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.message).to.equal('Product berhasil dihapus')

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
