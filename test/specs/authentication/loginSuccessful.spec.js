import { expect } from "chai";
import { loginSuccessful } from "../../function/authentication/postLoginSuccessful.js";

describe("Authentication", () => {
    it("POST - Login Successful", async () => {
        const response = await loginSuccessful()
        expect((await response).status).to.equal(201);
        expect((await response).body.message).to.equal('Authentication berhasil ditambahkan')
        
        console.log("Status:", (await response).status);
        console.log("Response Body:", (await response).body);
    }).timeout(5000)
})