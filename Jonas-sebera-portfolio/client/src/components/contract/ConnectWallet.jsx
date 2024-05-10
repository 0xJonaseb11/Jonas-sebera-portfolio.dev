import { useState, useEffect } from "react";
import Web3 from "web3";
import WelcomeContract from "./Welcome.json";

const contractAddress = "0xc9178Cc519Ed5815Fd787e4C27D3fd63c747A0AA";
const contractABI = WelcomeContract.abi;

const Welcome = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // init web3
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        console.log("Non-ethereum browser detected. Consider installing MetaMask");
        window.alert("Non-ethereum browser detected. Please install MetaMask!!");
        return;
      }

      // initialize contract instance
      const contract = new window.web3.eth.Contract(contractABI, contractAddress);

      // call getMessage function
      try {
        const fetchedMessage = await contract.methods.getMessage().call();
        setMessage(fetchedMessage);
      } catch (err) {
        console.error("Error fetching message", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Message from smart contract:</h1>
      <p>{message}</p>
    </div>
  );
};

export default Welcome;
