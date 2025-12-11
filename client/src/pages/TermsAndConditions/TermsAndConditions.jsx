import React, { useState } from "react";
import TermsAndConditionsEn from "./TermsAndConditionsEn";
import SectionTitle from "../../components/SectionTitle";
import TermsAndConditionsBn from "./TermsAndConditionsBn";

const TermsAndConditions = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="relative">
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-neutral
      block mx-auto mb-4
      lg:absolute lg:right-0 lg:top-0
      lg:mx-0 "
      >
        {toggle ? "বাংলায় দেখুন" : "See English"}
      </button>
      <SectionTitle
        title={toggle ? "Terms And Condition" : "শর্তাবলী"}
      ></SectionTitle>
      {toggle ? <TermsAndConditionsEn /> : <TermsAndConditionsBn />}
    </div>
  );
};

export default TermsAndConditions;
