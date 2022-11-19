import React from 'react'
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import _abi from "../abi";

const GetData = ({isConnected, signer}) => {
  async function execute(lic, dis, cur, add) {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x010AF46E9f229f2a7d5A7134a44320E278740f27";
      const abi = _abi;
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transRes = await contract.addPerson(lic, dis, cur, add);
        console.log(transRes);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

//   diff code start from here
    const [ licence, setLicense ] = useState("");
    const [ cure, setCure ] = useState("");
    const [ disease, setDisease ] = useState("");
    const [publicAddress, setPulicAddress] = useState("");

    const licenceChangeHandler = (e) => {
        setLicense(e.target.value);
    }

    const cureChangeHandler = (e) => {
        setCure(e.target.value);
    }

    const diseaseChangeHandler = (e) => {
        setDisease(e.target.value);
    }

    const metaMaskChangeHandler = (e) => {
        setPulicAddress(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        execute(licence, disease, cure, publicAddress);
    }

  return (
    <>
    
    {/* diff code starts from here */}
    <div className="container flex justify-center mt-32">
        <div className="p-6 rounded-lg shadow-lg bg-white max-w-md flex-1">
        <form onSubmit={submitHandler}>
            <div className="form-group mb-6">
            <input type="text" disabled={!isConnected} className="form-control block 
                hover:cursor-not-allowed
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                placeholder="Doctor's License" value={licence} onChange={licenceChangeHandler} />
            </div>
            <div className="form-group mb-6">
            <input type="text"  disabled={!isConnected} className="form-control block
                hover:cursor-not-allowed
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
                placeholder="Patient's Cure" onChange={cureChangeHandler} />
            </div>
            <div className="form-group mb-6">
            <input type="text"  disabled={!isConnected} className="form-control block
                hover:cursor-not-allowed
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
                placeholder="Patient Public Address" onChange={metaMaskChangeHandler} />
            </div>
            <div className="form-group mb-6">
            <textarea
            disabled={!isConnected} 
            className="
                hover:cursor-not-allowed
                form-control
                block
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
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Disease Details"
            onChange={diseaseChangeHandler}
            ></textarea>
            </div>
            {/* <button type="submit" className="
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
            ease-in-out">Add</button> */}
            <div>
            {/* {hasMetamask ? (
                <button onClick={submitHandler} type="submit" className='
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
                '>{isConnected ? "Execute": "Connect"}</button>
            ) : (
                "Please install metamask"
            )} */}
            <button onClick={submitHandler} type="submit" className='
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
            '>Execute</button>
            </div>
        </form>
        </div>
    </div>
    </>
  )
}

export default GetData;