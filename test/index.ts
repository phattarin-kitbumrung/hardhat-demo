import { expect } from "chai";
import { ethers } from "hardhat";

describe("Enum", function () {
  it("Should return new status and name", async function () {
    const Enum = await ethers.getContractFactory("Enum");
    const enumContract = await Enum.deploy(0, "mint");
    await enumContract.deployed();
    let result = await enumContract.get();
    expect(result[0]).to.equal(0);
    expect(result[1]).to.equal("mint");

    const setStatus = await enumContract.set(1, "newname");
    await setStatus.wait();
    result = await enumContract.get();
    expect(result[0]).to.equal(1);
    expect(result[1]).to.equal("newname");
  });
  it("Should reset status", async function () {
    const Enum = await ethers.getContractFactory("Enum");
    const enumContract = await Enum.deploy(1, "mint");
    await enumContract.deployed();

    const resetStatus = await enumContract.reset("mint");
    await resetStatus.wait();
    const result = await enumContract.get();
    expect(result[0]).to.equal(0);
  });
});
