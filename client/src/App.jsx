import React, { useContext } from "react";
import {
  Navbar,
  Welcome,
  Footer,
  Services,
  AllIssues,
  MyIssues,
  MyTryingIssues,
  MyCompletedIssues,
} from "./components";
import Tabs from "./components/Tabs";
import Working from "./components/working";
import { GithubContext } from "./context/GithubContext";
import Loader2 from "./Loader2";

const App = () => {
  const { isLoading } = useContext(GithubContext);

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <Loader2 />
      ) : (
        <>
          <div className="bg-[#131516]">
            <Navbar />
            <Welcome />
            <Working />
          </div>

          <Tabs />
          {/* <Loader2 /> */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
