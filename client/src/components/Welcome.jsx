import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { GithubContext } from "../context/GithubContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-md p-3 outline-none bg-[#3a3f43] text-black border-none text-sm "
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendIssue,
    formData,
    isLoading,
  } = useContext(GithubContext);

  const handleSubmit = (e) => {
    const { username, repourl, issue, desc, amount } = formData;

    e.preventDefault();

    if (!username || !amount || !repourl || !desc || !issue) return;

    sendIssue();
  };

  return (
    <div className="flex w-full justify-center items-center ">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-10 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white  py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-[#202325] shadow-lg shadow-cyan-500/50  rounded-md ">
            <h1 className="text-white font-semibold text-2xl mb-5">
              Post an Issue
            </h1>

            <Input
              placeholder="Github Username"
              name="username"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Repo Url"
              name="repourl"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Exact Issue"
              name="issue"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Description"
              name="desc"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white  mt-2 border-[1px] p-2 border-white hover:bg-[#3d4f7c] rounded-md cursor-pointer"
              >
                Post Issue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
