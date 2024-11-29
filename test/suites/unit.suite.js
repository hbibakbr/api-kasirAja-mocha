import { expect } from "chai";
import { before } from "mocha";
import { getAccessToken } from "../helper/getAccessToken.js";
import { postCreateUnit } from "../function/units/postCreateUnit.js";
import { getUnitDetail } from "../function/units/getUnitDetail.js";
import { getUnitList } from "../function/units/getUnitList.js";
import { putUpdateUnit } from "../function/units/putUpdateUnit.js";
import { deleteUnit } from "../function/units/deleteUnit.js";

describe("End to End Unit Management Testing", () => {
    let accessToken;
    let unitId;

    before(async function () {
        accessToken = await getAccessToken();
    });

    it("POST - Add Unit", async () => {
        const response = await postCreateUnit(accessToken);
        unitId = response.body.data.unitId

        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Unit berhasil ditambahkan');
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.name).to.equal('gram');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("Get - Unit Detail", async () => {
        const response = await getUnitDetail(unitId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - User List", async () => {
        const response = await getUnitList(accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });

    it("PUT - Update Unit", async () => {
        const response = await putUpdateUnit(unitId, accessToken);
        const expectedName = 'update-gram';

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    })

    it("DELETE - Unit", async () => {
        const response = await deleteUnit(unitId, accessToken);

        expect((await response).status).to.equal(200);
        expect((await response).body.status).to.equal('success');
        expect((await response).body.data).to.be.an('object').that.is.empty;

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

})
