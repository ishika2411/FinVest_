import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Sections/Header";
import background from "./assets/grind.jpg";
import Home from "./Pages/Home";
import Insights from "./Pages/Insights";
import Account from "./Pages/Account";
import Learn from "./Pages/Learn";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PreferenceForm from "./Pages/PreferenceForm";
import Footer from "./Sections/Footer";

function App() {
  const user = localStorage.getItem("user");

  return (
    <div
      className="monoFont scrollHide text"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/account" element={<Account />} />
          {!user && (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </>
          )}
          <Route path="/preferences" element={<PreferenceForm />} />
        </Routes>
          <Footer/>
      </>
    </div>
  );
}

export default App;
