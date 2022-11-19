import React from 'react'
import Nav from "./Nav";
import SendData from "./pages/SendData";
import RetrieveData from "./pages/RetrieveData";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import _abi from "./abi";

const Home = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

  const { ethereum } = window;

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  return (
    <div className="container">
      <Nav />
      {hasMetamask ? (
        isConnected ? (
          <div>
            <SendData isConnected={isConnected} signer={signer} />
            <RetrieveData isConnected={isConnected} signer={signer} />
          </div>
        ) : (
          // <div>
          // </div>
          <button
            onClick={connect}
            type="submit"
            className="
              w-full
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out
          "
          >
            Connect
          </button>
        )
      ) : (
        "Please install metamask"
      )}
    </div>
  );
}

export default Home