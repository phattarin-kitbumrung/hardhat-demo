import { ethers } from "hardhat";

async function main() {
  const Enum = await ethers.getContractFactory("Enum");
  const enumContract = await Enum.deploy(0, "mint");
  await enumContract.deployed();
  console.log("Enum deployed to:", enumContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
