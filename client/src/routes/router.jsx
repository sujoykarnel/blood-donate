import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import SignUpDonor from "../pages/Donor/SignUpDonor";
import SignInDonor from "../pages/Donor/SignInDonor";
import Donors from "../pages/Donor/Donors";
import TermsAndConditions from "../pages/TermsAndConditions/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "signUpDonor",
        element: <SignUpDonor></SignUpDonor>,
      },
      {
        path: "signInDonor",
        element: <SignInDonor></SignInDonor>,
      },
      {
        path: "donors",
        element: <Donors></Donors>,
      },
      {
        path: "termsAndConditions",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);

export default router;
