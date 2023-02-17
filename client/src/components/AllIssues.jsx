import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GithubContext } from "../context/GithubContext";
import { CardActions, Divider, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddLinkIcon from "@mui/icons-material/AddLink";
import PaidIcon from "@mui/icons-material/Paid";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    // step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 rounded-sm p-2  bg-transparent text-black  text-sm"
  />
);

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
  const {
    handleChange2,
    currentAccount,
    tryFormData,
    setTryformData,
    sendTryRequest,
    isLoading,
    userAddress,
  } = useContext(GithubContext);
  const i_d = id;
  //console.log(i_d);
  console.log(currentAccount);

  const usertry = usersTrying.length;

  const handleSubmit = (e) => {
    const { tryusername } = tryFormData;
    e.preventDefault();

    if (!tryusername) return;

    if (tryusername === username) {
      alert("You can't try your own issue");
      return;
    }
    const len = usersTrying.length;
    for (var i = 0; i < len; i++) {
      if (tryusername === usersTrying[i].username) {
        alert("You already trying this issue");
        return;
      }
      if (userAddress === usersTrying[i].user) {
        alert("You already trying this issue");
        return;
      }
    }
    console.log(tryFormData);
    //sendIssue(); send try request
    sendTryRequest(i_d);
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
            {username}
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
          <Typography color="white" fontSize="14px">
            Users trying:{usertry}{" "}
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="white">
            Try this issue
          </Typography>
          <Input
            placeholder="Username"
            name="tryusername"
            type="text"
            handleChange={handleChange2}
          />
          <Input
            placeholder="Issue ID"
            value={i_d}
            name="tryid"
            type="hidden"
            handleChange={handleChange2}
          />

          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#fff",
              color: "black",
              borderRadius: "5px",
              padding: "5px",
              fontSize: "14px",
            }}
          >
            Request
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

const Issues = () => {
  const { issues, currentAccount } = useContext(GithubContext);
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
          {issues.map((issue, i) => (
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

export default Issues;
