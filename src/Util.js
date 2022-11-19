import { useState, useEffect } from "react";
import { ethers } from "ethers";
import _abi from "./abi";

const Util = () => {
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

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x010AF46E9f229f2a7d5A7134a44320E278740f27";
      const abi = _abi;
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transRes = await contract.addPerson("xz", "Rahul", "Shubham", "0x61Ca913deEd0ffeF1D86a32861C779CfBBe8DC49");
        console.log(transRes);

        const res = await contract.retrieve("0x61Ca913deEd0ffeF1D86a32861C779CfBBe8DC49");
        console.log(res);

      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }
  return (
    <div>
      {hasMetamask ? (
        isConnected ? (
          "Connected! "
        ) : (
          <button onClick={() => connect()}>Connect</button>
        )
      ) : (
        "Please install metamask"
      )}

      {isConnected ? <button onClick={() => execute()}>Execute</button> : ""}
    </div>
  );
}

// const App = () => {
//   const [hasMetamask, setHasMetamask] = useState(false);
  
//   // enablesWeb3 is a function to connect to web3
//   const { enableWeb3, isWeb3Enabled } = useMoralis();

//   // runContractFunction is a function to execute contract
//   const { data, error, runContractFunction, isFetching, isLoading } =
//     useWeb3Contract({
//       abi: abi,
//       contractAddress: "0x010AF46E9f229f2a7d5A7134a44320E278740f27", // your contract address here
//       functionName: "store",
//       params: {
//         _favoriteNumber: 42,
//       },
//     });

//   useEffect(() => {
//     if (typeof window.ethereum !== "undefined") {
//       setHasMetamask(true);
//     }
//   });

//   return (
//     <div>
//       {hasMetamask ? (
//         isWeb3Enabled ? (
//           "Connected! "
//         ) : (
//           <button onClick={() => enableWeb3()}>Connect</button>
//         )
//       ) : (
//         "Please install metamask"
//       )}

//       {isWeb3Enabled ? (
//         <button onClick={() => runContractFunction()}>Execute</button>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

export default Util;
