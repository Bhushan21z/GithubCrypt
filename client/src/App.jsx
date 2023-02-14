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

const App = () => (
  <div className="min-h-screen">
    <div className="bg-[#131516]">
      <Navbar />
      <Welcome />
    </div>
  
    <Tabs />
    {/* <AllIssues />
    <MyIssues />
    <MyTryingIssues />
    <MyCompletedIssues /> */}
    <Footer />
  </div>
);

export default App;
