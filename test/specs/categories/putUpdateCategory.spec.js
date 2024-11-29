import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { putUpdateCategory } from "../../function/categories/putUpdateCategory.js";

describe("Categories Management", () => {
    let accessToken;
    let categoryId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("PUT - Update Category", async () => {
        categoryId = '1a538d06-9173-4fe1-9577-6744ae1e208e';
        const expectedName = 'Update-Milky';
        const response = await putUpdateCategory(categoryId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    })
});
