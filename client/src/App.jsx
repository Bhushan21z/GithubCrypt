import { Navbar, Welcome, Footer, Services, AllIssues, MyIssues, MyTryingIssues, MyCompletedIssues } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <AllIssues />
    <MyIssues />
    <MyTryingIssues />
    <MyCompletedIssues />
    <Footer />
  </div>
);

export default App;
