import { expect } from "chai";
import { before} from "mocha";
import { getAccessToken } from "../helper/getAccessToken.js";
import { postAddCategory } from "../function/categories/postAddCategory.js";
import { getCategoryDetail } from "../function/categories/getCategoryDetail.js";
import { getCategoryList } from "../function/categories/getCategoryList.js";
import { putUpdateCategory } from "../function/categories/putUpdateCategory.js";
import { deleteCategory } from "../function/categories/deleteCategory.js";

describe("End to End Categories Management", () => {
    let accessToken;
    let categoryId;

    before(async function () {
        accessToken = await getAccessToken();
    });

    it("POST - Add Category", async () => {
        const response = await postAddCategory(accessToken);
        categoryId = response.body.data.categoryId;

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Category berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - Category Detail", async () => {
        const response = await getCategoryDetail(categoryId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - Category List", async () => {
        const response = await getCategoryList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });

    it("PUT - Update Category", async () => {
        const expectedName = 'Update-Milky';
        const response = await putUpdateCategory(categoryId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    })

    it("DELETE - Category", async () => {
        const response = await deleteCategory(categoryId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data).to.be.an('object').that.is.empty;

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

});