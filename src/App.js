import "./App.css";
import UserLogin from "./UserLogin/Login";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./Home";
import SignUpUser from "./UserLogin/UserSignUp/SignUp";
// import DisplayTest from "./SampleObjs/SampleJewlery";
import MyForm from "./admin/newitems";
import About from "./AboutPage/about";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Sample" element={<DisplayTest />} /> */}
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/Login/SignUp" element={<SignUpUser />} />
        <Route path="/AdminAdd" element={<MyForm />} />
        <Route path="About" element={<About />} />
        {/* <Route path="/LoggedHome" element={<Logged_Home />} /> */}
      </Routes>
    </div>
  );
};

export default App;
