import { expect } from "chai";
import { before } from "mocha";
import { getAccessToken } from "../helper/getAccessToken.js";
import { postAddProduct } from "../function/products/postAddProduct.js";
import { getProductDetail } from "../function/products/getProductDetail.js";
import { getProductList } from "../function/products/getProductList.js";
import { putUpdateProduct } from "../function/products/putUpdateProduct.js";
import { deleteProduct } from "../function/products/deleteProduct.js";

describe("End to End Products Management", () => {
    let accessToken;
    let productId;
    let espressoId;

    before(async function () {
        accessToken = await getAccessToken();
        espressoId = '08a10107-e0de-4275-b705-8ca5e233add7';
    });

    it("POST - Add Product", async () => {
        const response = await postAddProduct(espressoId, accessToken);
        productId = response.body.data.productId;

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Product berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - Product Detail", async () => {
        const response = await getProductDetail(productId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - Product List", async () => {
        const response = await getProductList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });

    it("PUT - Update Product", async () => {
        const response = await putUpdateProduct(espressoId, productId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("DELETE - Product", async () => {
        const response = await deleteProduct(productId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.message).to.equal('Product berhasil dihapus')

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

})