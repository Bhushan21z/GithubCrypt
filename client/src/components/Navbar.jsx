import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaGithubAlt } from "react-icons/fa";
import { GithubContext } from "../context/GithubContext";
import logo from "../../images/logo.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { shortenAddress } from "../utils/shortenAddress";
import { Typography } from "@mui/material";
const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendIssue,
    formData,
    isLoading,
  } = useContext(GithubContext);

  return (
    <nav className="w-full flex  items-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <h1 className="text-white font-semibold text-4xl">GithubCrypt</h1>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <Typography
          sx={{
            color: "black",
            fontSize: "20px",
            backgroundColor: "#E9ECEF",
            borderRadius: "0.5rem",
            padding: "0.5rem",
          }}
        >
          {shortenAddress(currentAccount)}
        </Typography>
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center  m-5 p-3 rounded-md cursor-pointer"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
