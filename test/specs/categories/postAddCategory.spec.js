import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { postAddCategory } from "../../function/categories/postAddCategory.js"; 

describe("Categories Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("POST - Add Category", async () => {
        const response = await postAddCategory(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Category berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
