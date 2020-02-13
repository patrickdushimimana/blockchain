var NationalID = artifacts.require("./NationalID.sol");

module.exports = function(deployer) {
  deployer.deploy(NationalID);
};
