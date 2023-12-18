import React from "react";
import Navbar from "./components/navbar";

const page = () => {
  return (
    <>
      <Navbar />

      <footer className="w-full mx-auto flex justify-center">
        <span>&#169; copyright</span>
      </footer>
    </>
  );
};

export default page;
