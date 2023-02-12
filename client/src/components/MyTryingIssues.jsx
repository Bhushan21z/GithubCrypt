import React, { useContext } from "react";
// import { MyIssues } from ".";

import { GithubContext } from "../context/GithubContext";

import useFetch from "../hooks/useFetch";
//import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const IssueCard = ({ id, Issuer, username, repourl, issue, desc, amount, status, solvedUser, solvedUsername, claimed, usersTrying  }) => {
  // const gifUrl = useFetch({ keyword });
  const { currentAccount, userAddress, MarkComplete } = useContext(GithubContext);
  console.log(currentAccount);
  const handleSubmit = (e) => {
    //console.log(userAddress);
    e.preventDefault();
    const len= usersTrying .length;
    for(var i=0;i<len;i++){
      //console.log(usersTrying[i].user);
      if (userAddress.toUpperCase()===usersTrying[i].user.toUpperCase()){
        MarkComplete(id,usersTrying[i].username);
        return;
      }
    }
    console.log("mark complete not called");
    
    //sendTryRequest(i_d);
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
        </div>
        <button type="button" onClick={handleSubmit} className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer" >
            Mark Complete
        </button>
      </div>
    </div>
  );
};

const MyTryingIssues = () => {
  const { currentAccount, myTryingIssues } = useContext(GithubContext);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            My Trying Issues
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest Issues
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {myTryingIssues.map((issue, i) => (
            <IssueCard key={i} { ...issue} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTryingIssues;
