import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const GithubContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const GithubContract = new ethers.Contract(contractAddress, contractABI, signer);

  return GithubContract;
};

export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ username: "",repourl: "", issue:"",desc:"" ,amount: "" });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [issueCount, setIssueCount] = useState(localStorage.getItem("IssueCount"));
  const [issues, setIssues] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllIssues = async () => {
    try {
      if (ethereum) {
        const githubContract = createEthereumContract();

        const availableIssues = await githubContract.getAllIssues();

        const structuredIssues = availableIssues.map((issue) => ({
          id: issue.id,
          Issuer: issue.sender,
          username : issue.username,
          repourl : issue.repourl,
          issue : issue.issue,
          description : issue.desc,
          amount: parseInt(issue.amount._hex) / (10 ** 18),
          status : issue.status,
          solvedUser : issue.solvedUser,
          solvedUsername : issue.solvedUsername,
          claimed : issue.claimed,
          usersTrying : issue.users
          //timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        }));

        console.log(structuredIssues);

        setIssues(structuredIssues);
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllIssues();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfIssuesExists = async () => {
    try {
      if (ethereum) {
        const issueContract = createEthereumContract();
        const currentIssueCount = await issueContract.getIssuesCount();

        window.localStorage.setItem("IssueCount", currentIssueCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  // const sendTransaction = async () => {
  //   try {
  //     if (ethereum) {
  //       const { addressTo, amount, keyword, message } = formData;
  //       const transactionsContract = createEthereumContract();
  //       const parsedAmount = ethers.utils.parseEther(amount);

  //       await ethereum.request({
  //         method: "eth_sendTransaction",
  //         params: [{
  //           from: currentAccount,
  //           to: addressTo,
  //           gas: "0x5208",
  //           value: parsedAmount._hex,
  //         }],
  //       });

  //       const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

  //       setIsLoading(true);
  //       console.log(`Loading - ${transactionHash.hash}`);
  //       await transactionHash.wait();
  //       console.log(`Success - ${transactionHash.hash}`);
  //       setIsLoading(false);

  //       const transactionsCount = await transactionsContract.getTransactionCount();

  //       setTransactionCount(transactionsCount.toNumber());
  //       window.location.reload();
  //     } else {
  //       console.log("No ethereum object");
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     throw new Error("No ethereum object");
  //   }
  // };


    const sendIssue = async () => {
    try {
      if (ethereum) {
        const { username, repourl, issue, desc, amount } = formData;
        const issueContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        // await ethereum.request({
        //   method: "eth_sendTransaction",
        //   params: [{
        //     from: currentAccount,
        //     to: addressTo,
        //     gas: "0x5208",
        //     value: parsedAmount._hex,
        //   }],
        // });

        const issueHash = await issueContract.addIssue(username, repourl, issue, desc, parsedAmount);

        setIsLoading(true);
        console.log(`Loading - ${issueHash.hash}`);
        await issueHash.wait();
        console.log(`Success - ${issueHash.hash}`);
        setIsLoading(false);

        const issueCount = await issueContract.getIssuesCount();

        setIssueCount(issueCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
    checkIfIssuesExists();
  }, [issueCount]);

  return (
    <GithubContext.Provider
      value={{
        issueCount,
        connectWallet,
        issues,
        currentAccount,
        isLoading,
        sendIssue,
        //sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
