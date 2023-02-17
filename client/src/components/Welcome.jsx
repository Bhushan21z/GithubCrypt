import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { GithubContext } from "../context/GithubContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { Grid, Typography } from "@mui/material";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-md p-3 outline-none bg-[#3a3f43] text-white border-none text-sm "
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
    <Grid
      container
      xs={12}
      sx={{
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        p: 5,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{
          p: {
            xs: 5,
            md: 0,
          },
        }}
      >
        <p className="text-3xl sm:text-5xl text-white  ">
          Send Crypto <br /> across the world
        </p>
        <p className=" mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on
          Krypto.
        </p>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#202325",
            borderRadius: "1rem",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            p: 5,
          }}
        >
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;

{
  /* <Grid
container
xs={12}
sx={{
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}}
>
<Grid item xs={12} md={8} lg={6}>
  <h1 className="text-3xl sm:text-5xl text-white  py-1">
    Send Crypto <br /> across the world
  </h1>
  <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
    Explore the crypto world. Buy and sell cryptocurrencies easily on
    Krypto.
  </p>
</Grid>
<Grid item xs={12} md={8} lg={6}>
  <Grid
    container
    xs={12}
    sx={{
      mt: 5,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#202325",
      borderRadius: "1rem",
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
      p: 5,
    }}
  >
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
  </Grid>
</Grid>
</Grid> */
}
