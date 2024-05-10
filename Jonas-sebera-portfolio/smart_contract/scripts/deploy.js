
const main = async () => {
  // const accounts = await hre.ethers.provider.listAccounts();
  // console.log(accounts);

  const Welcome = await ethers.getContractFactory("Welcome");
  const welcome = await Welcome.deploy();

  console.log("Deploying Welcome contract.....");

  // await welcome.deployed();

  console.log("Welcome contract deployed to address: ", welcome.address);

}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    console.log("End of task execution!!");
  }
}

runMain();