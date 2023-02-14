import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GithubContext } from "../context/GithubContext";
import { Grid } from "@mui/material";
import { BsFillPersonFill } from "react-icons/bs";
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
      alert("You cannot request your own issue");
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
        <Typography
          sx={{
            fontSize: "14px",
            color: "black",
            mb: "10px",
          }}
        >
          <BsFillPersonFill /> {username}
        </Typography>
        <Grid
          container
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {issue}
          </Typography>
        </Grid>
      </CardContent>
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
