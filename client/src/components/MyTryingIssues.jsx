import React, { useContext } from "react";
// import { MyIssues } from ".";

import { GithubContext } from "../context/GithubContext";
import AddLinkIcon from "@mui/icons-material/AddLink";
import PaidIcon from "@mui/icons-material/Paid";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CardActions, Divider, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import useFetch from "../hooks/useFetch";
//import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

const IssueCard = ({
  id,
  Issuer,
  username,
  repourl,
  issue,
  desc,
  amount,
  status,
  solvedUser,
  solvedUsername,
  claimed,
  usersTrying,
}) => {
  // const gifUrl = useFetch({ keyword });
  const { currentAccount, userAddress, MarkComplete } =
    useContext(GithubContext);
  console.log(currentAccount);
  const handleSubmit = (e) => {
    //console.log(userAddress);
    e.preventDefault();
    const len = usersTrying.length;
    for (var i = 0; i < len; i++) {
      //console.log(usersTrying[i].user);
      if (userAddress.toUpperCase() === usersTrying[i].user.toUpperCase()) {
        MarkComplete(id, usersTrying[i].username);
        return;
      }
    }
    console.log("mark complete not called");

    //sendTryRequest(i_d);
  };

  return (
    <Card
      sx={{
        maxWidth: "380px",
        minWidth: "380px",
        width: "auto",
        height: "auto",
        border: "1.37039px solid rgba(147, 162, 211, 0.38)",
        borderRadius: "20.937px",
        boxShadow: "none",
        backgroundColor: "#202325",
        p: "20px",
        mx: {
          xs: "20px",
          sm: "0px",
          md: "0px",
        },
      }}
    >
      <CardMedia
        sx={{ width: "auto", height: "70px", borderRadius: "10px" }}
        image="https://cdn.dribbble.com/users/644659/screenshots/5940913/1_rewind_dribbble_live_ipad_4x.png?compress=1&resize=800x600"
        title="green iguana"
      />
      <CardContent>
        {/* Url
Username
Issue title
Desc.
Amount
Users trying

Form
Button */}
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            my: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "black",
              backgroundColor: "#fff",
              borderRadius: "5px",
              padding: "5px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StarIcon
              sx={{
                fontSize: "20px",
                color: "#dbaa0b",
                m: "2px",
              }}
            />{" "}
            {issue}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "white",
            }}
          >
            From: {username}
          </Typography>
        </Grid>

        <Typography
          color="#78bbe7"
          sx={{
            fontsize: "14px",
            textDecoration: "underline",
          }}
        >
          <AddLinkIcon
            sx={{
              fontSize: "25px",
              mr: "5px",
              color: "#78bbe7",
            }}
          />
          {repourl.slice(19)}
        </Typography>
        <Typography
          color="white"
          sx={{
            fontSize: "14px",
            my: "10px",
            p: "15px",
            backgroundColor: "#3a3f43",
          }}
        >
          <Typography
            color="white"
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Description
          </Typography>
          {/* {desc} */}
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        </Typography>

        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography color="white" fontSize="14px">
            <PaidIcon sx={{ fontSize: "20px" }} /> {amount}
            ETH
          </Typography>
        </Grid>
        <Divider sx={{ mt: "10px", backgroundColor: "white" }} />
      </CardContent>

      <CardActions>
        <Grid
          container
          xs={12}
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Mark Complete
          </Button>
        </Grid>
      </CardActions>
    </Card>
    // <div
    //   className="bg-[#181918] m-4 flex flex-1
    //   2xl:min-w-[450px]
    //   2xl:max-w-[500px]
    //   sm:min-w-[270px]
    //   sm:max-w-[300px]
    //   min-w-full
    //   flex-col p-3 rounded-md hover:shadow-2xl"
    // >
    //   <div className="flex flex-col items-center w-full mt-3">
    //     <div className="display-flex justify-start w-full mb-6 p-2">
    //       <a
    //         href={`https://ropsten.etherscan.io/address/${Issuer}`}
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         <p className="text-white text-base">
    //           From: {shortenAddress(Issuer)}
    //         </p>
    //       </a>
    //       <p className="text-white text-base">Amount: {amount} ETH</p>
    //       {username && (
    //         <>
    //           <br />
    //           <p className="text-white text-base">
    //             Github Username: {username}
    //           </p>
    //         </>
    //       )}
    //       {repourl && (
    //         <>
    //           <br />
    //           <p className="text-white text-base">Github Repo Url: {repourl}</p>
    //         </>
    //       )}
    //       {issue && (
    //         <>
    //           <br />
    //           <p className="text-white text-base">Github Issue: {issue}</p>
    //         </>
    //       )}
    //       {desc && (
    //         <>
    //           <br />
    //           <p className="text-white text-base">Issue Description: {desc}</p>
    //         </>
    //       )}
    //     </div>
    //     <button
    //       type="button"
    //       onClick={handleSubmit}
    //       className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
    //     >
    //       Mark Complete
    //     </button>
    //   </div>
    // </div>
  );
};

const MyTryingIssues = () => {
  const { currentAccount, myTryingIssues } = useContext(GithubContext);

  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        height: "auto",
        width: "100%",
      }}
    >
      {currentAccount ? (
        <Grid
          item
          xs={12}
          sx={{
            mt: "50px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: "30px",
            columnGap: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {myTryingIssues.map((issue, i) => (
            <IssueCard key={i} {...issue} />
          ))}
        </Grid>
      ) : (
        <h3 className="text-white text-3xl text-center my-2">
          Connect your account to see the latest Issues
        </h3>
      )}
    </Grid>
  );
};

export default MyTryingIssues;
