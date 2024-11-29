import { expect } from "chai";
import { postLoginUnsuccessful } from "../../function/authentication/postLoginUnsuccessful.js";

describe("Authentication", () => {
    it("POST - Login Unsuccessful", async () => {
        const response = await postLoginUnsuccessful()
        expect((await response).status).to.equal(401);
        expect((await response).body.message).to.equal('Kredensial yang Anda berikan salah')
        
        console.log("Status:", response.status);
        console.log("Response Body:", response.body);
    }).timeout(5000)
})