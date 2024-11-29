import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { getCategoryList } from "../../function/categories/getCategoryList.js";

describe("Categories Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("GET - Category List", async () => {
        const response = await getCategoryList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });
});
