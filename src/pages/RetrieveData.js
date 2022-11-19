import { useState, useEffect } from "react";
import { ethers } from "ethers";
import _abi from "../abi";
import Card from "../Cards";
const RetrieveData = ({isConnected, signer}) => {
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  async function execute(add) {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x010AF46E9f229f2a7d5A7134a44320E278740f27";
      const abi = _abi;
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        // const transRes = await contract.addPerson("xz", "Rahul", "Shubham", "0x61Ca913deEd0ffeF1D86a32861C779CfBBe8DC49");
        // console.log(transRes);
        const res = await contract.retrieve(add);
        console.log(res);
        setData(res);

      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

    const submitHandler = (e) => {
        e.preventDefault()
        execute(address);
    }

    return ( 
    <div className="container flex justify-center mt-4 flex-col items-center">
        <div className="p-6 rounded-lg shadow-lg bg-white max-w-md flex-1">
        <form>
            <div className="form-group mb-6">
            <input type="text" className="form-control block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                placeholder="Public Adress of Patient" onChange={(e) => setAddress(e.target.value)} />
            </div>


            <div>
                <button onClick={submitHandler} type="submit" onSubmit={submitHandler} className='
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
                '>Get Data</button>
            </div>
        </form>
        </div>

        <div className="flex-1 flex flex-col gap-4 mt-8">
          {data.map(item => 
            <Card license={item[0]} disease={item[1]} cure={item[2]} />
          )}
        </div>
    </div>)
};

export default RetrieveData;