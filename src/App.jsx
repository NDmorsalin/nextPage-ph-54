import React from "react";
import Header from "./components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

const App = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header></Header>
      <div className="container p-8 mx-auto  min-h-[calc(100vh-116px)]">
        {navigation.state === "loading" ? <Loading /> : <Outlet />}
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
