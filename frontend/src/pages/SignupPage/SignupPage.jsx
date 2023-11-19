import React from "react";
import Signup from "../../components/Signup/Signup";
import apiService from "../../api/apiServices";
import { redirect } from "react-router-dom";

const SignUpPage = () => {
  const onSubmit = (data) => {
    apiService
      .post("api/user/signup", data)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        return redirect("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="h-full flex justify-center items-center md:bg-black/5">
      <Signup onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpPage;
