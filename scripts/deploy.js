const hre = require("hardhat");

async function main() {
 
  const Inec = await ethers.deployContract("Inec");
  await Inec.waitForDeployment();


  console.log("Inec contract has been deployed to:", Inec.target);

 
}

main()
    .catch((error) => {
    console.error(error);
    process.exit(1);
  });
