import react, {useState, useEffect } from "react";
import Web3 from "web3";
import WelcomeContract from "../../../../smart_contract/artifacts/contracts/Welcome.sol/Welcome.json"


const contractAddress = "";
const contractABI = WelcomeContract;

const Welcome = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async() => {
      // init web3
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      }  else {
        console.log("Non-ethereum brownser detected. Consider installing metamask");
        window.alert("Non-ethereum browser detected..Please install metamask!!");
        return;
      }

      // initialize contract instance
      const contract = new window.web3.eth.Contract(contractABI, contractAddress);

      // call getMessage function
      try {
        const fetchedMessage = await contract.methods.getMessage().call();
        setMessage(fetchedMessage);
      } catch (err) {
        console.error("Error fetching message",err);

      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Message from smart contract: </h1>
    </div>
  )
}

