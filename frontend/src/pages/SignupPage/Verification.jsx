import React, { useEffect, useState } from "react";

import { MdVerified } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

import { useParams } from "react-router-dom";
import apiService from "../../api/apiServices";

const Verification = () => {
  const { token } = useParams();
  const [verificationMessage, setVerificationMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleVerification = async () => {
    apiService
      .get(`http://localhost:3030/api/user/verify?token=${token}`)
      .then((response) => {
        console.log(response.data);
        setVerificationMessage(response.data);
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error.response.data);
        console.log("Hello");
        setVerificationMessage("Error verifying email.");
        setSuccess(false);
      });
  };

  useEffect(() => {
    handleVerification();
  }, []);

  return (
    <div className="h-full flex justify-center items-center md:bg-black/5">
      <div className="flex-1 md:max-w-xl">
        <div className="px-8 py-6 mt-4 bg-white rounded-lg md:shadow-lg">
          <div className="flex flex-col gap-7 items-center">
            <span className="text-2xl">Email Verification</span>

            <span className="text-xl flex items-center gap-4">
              {success ? (
                <MdVerified className="h-14 w-14 text-green-500" />
              ) : (
                <IoIosCloseCircle className="h-12 w-12 text-red-500" />
              )}{" "}
              {verificationMessage}
            </span>
            <button
              className="bg-blue-500 text-white p-3 rounded-md hover:bg-green-500"
              onClick={() => window.close()}
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
