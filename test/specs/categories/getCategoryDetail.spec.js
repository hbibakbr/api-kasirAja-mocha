import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getCategoryDetail } from "../../function/categories/getCategoryDetail.js";


describe("Categories Management", () => {
    let accessToken;
    let categoryId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("Get - Category Detail", async () => {
        categoryId = '08a10107-e0de-4275-b705-8ca5e233add7';
        const response = await getCategoryDetail(categoryId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});