import { expect } from "chai";
import { getAccessToken } from "../helper/getAccessToken.js";
import { postCreateUser } from "../function/users/postCreateUser.js";
import { getUser } from "../function/users/getUser.js";
import { getUserList } from "../function/users/getUserList.js";
import { putUpdateUser } from "../function/users/putUpdateUser.js";
import { deleteUser } from "../function/users/deleteUser.js";
import { before } from "mocha";


describe("End to End User Management Testing", () => {
    let accessToken;
    let userId;

    before(async function () {
        accessToken = await getAccessToken();
    })

    it("POST - Create User Successful", async () => {
        const response = await postCreateUser(accessToken);
        userId = response.body.data.userId

        expect(response.status).to.equal(201);
        expect(response.body.message).to.equal('User berhasil ditambahkan');
        expect(response.body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("GET - User Detail ", async () => {
        const response = await getUser(userId, accessToken);
        const expectedName = 'akbar';

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.data.user.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data.user)
    });

    it("GET - Users List", async () => {
        const response = await getUserList(accessToken);

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });

    it("PUT - Update User", async () => {
        const response = await putUpdateUser(userId, accessToken);
        const expectedName = 'akbar-update'

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('User berhasil diupdate');
        expect(response.body.data.name).to.equal(expectedName);

        console.log("Status:", response.status);
        console.log("Response Body:", response.body.data);
    });

    it("DELETE - User Successful", async () => {
        const response = await deleteUser(userId, accessToken);

        expect(response.status).to.equal(200);
        expect(response.body.status).to.equal('success');
        expect(response.body.message).to.equal('User berhasil dihapus');

        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    });
})