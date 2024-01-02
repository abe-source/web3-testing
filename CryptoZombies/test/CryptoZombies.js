const HelloWorld = artifacts.require("HelloWorld")


contract("HelloWorld", (accounts) => {
    let [alice, bob] = accounts;
    it("should be able to say hi", async () => {
        const contractInstance = await HelloWorld.new();
    })
})