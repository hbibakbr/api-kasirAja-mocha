import { expect } from "chai";
import { getAccessToken } from "../../helper/getAccessToken.js";
import { postCreateUnit } from "../../function/units/postCreateUnit.js";

describe("User Management", () => {
    let accessToken;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("POST - Create User", async () => {
        const response = await postCreateUnit(accessToken);

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Unit berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.name).to.equal('gram');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
});
