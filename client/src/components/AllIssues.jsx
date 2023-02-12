import React, { useContext } from "react";
import {  useState } from "react";

import { GithubContext } from "../context/GithubContext";

import useFetch from "../hooks/useFetch";
//import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    // step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const IssueCard = ({ id, Issuer, username, repourl, issue, desc, amount, status, solvedUser, solvedUsername, claimed, usersTrying }) => {
  // const gifUrl = useFetch({ keyword });
  const { handleChange2, currentAccount, tryFormData, setTryformData, sendTryRequest, isLoading } = useContext(GithubContext);
  const i_d= id;
  //console.log(i_d);
  
  const usertry= usersTrying.length;
  const handleSubmit = (e) => {
    const { tryusername } = tryFormData;
    e.preventDefault();

    if (!tryusername ) return;
    if (tryusername===username){
      alert("You cannot request your own issue");
      return;
    }
    const len= usersTrying.length;
    for(var i=0;i<len;i++){
      if (tryusername===usersTrying[i].username){
        alert("You already trying this issue");
        return;
      }
    }
    console.log(tryFormData);
    //sendIssue(); send try request
    sendTryRequest(i_d);
  };

  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${Issuer}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(Issuer)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {username && (
            <>
              <br />
              <p className="text-white text-base">Github Username: {username}</p>
            </>
          )}
          {repourl && (
            <>
              <br />
              <p className="text-white text-base">Github Repo Url: {repourl}</p>
            </>
          )}
          {issue && (
            <>
              <br />
              <p className="text-white text-base">Github Issue: {issue}</p>
            </>
          )}
          {desc && (
            <>
              <br />
              <p className="text-white text-base">Issue Description: {desc}</p>
            </>
          )}
            <>
              <br />
              <p className="text-white text-base">Users Trying: {usertry}</p>
            </>
        </div>
        {/* form code */}
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Github Username" name="tryusername" type="text" handleChange={handleChange2} />
            <Input placeholder="Issue ID" value={i_d} name="tryid" type="hidden" handleChange={handleChange2} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />


                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send Request
                </button>
          </div>
        
      </div>
    </div>
  );
};

const Issues = () => {
  const { issues, currentAccount } = useContext(GithubContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Issues
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest Issues
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {issues.map((issue, i) => (
            <IssueCard key={i} { ...issue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Issues;
