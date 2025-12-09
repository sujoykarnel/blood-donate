import React from "react";

const TermsAndConditionsEn = () => {
  return (
    <div>
      <ol className="list-decimal">
        <li className="font-bold">Eligibility</li>
        <div className="mb-4">
          <ul className="ml-4 list-disc">
            <li>Donor must be 18–60 years old.</li>
            <li>Must weigh at least 50 kg.</li>
            <li>
              Must be in good health and free from any infectious disease.
            </li>
            <li>
              Must provide accurate and truthful information during
              registration.
            </li>
          </ul>
        </div>
        <li className="font-bold">Health & Medical Conditions</li>
        <div className="mb-4">
          <ul className="ml-4 list-disc">
            <li>
              Donor must not donate if they have fever, cold, infections, or any
              temporary illness.
            </li>
            <li>Donor must disclose any chronic diseases, such as:</li>
            <ul className="list-disc ml-4">
              <li>Hepatitis</li>
              <li>HIV/AIDS</li>
              <li>Heart disease</li>
              <li>Diabetes (uncontrolled)</li>
              <li>High blood pressure (uncontrolled)</li>
            </ul>
            <li>
              Donor confirms they are not taking drugs or medication that
              prohibits blood donation.
            </li>
          </ul>
        </div>
        <li className="font-bold">Accurate Information</li>
        <div className="mb-4">
          <h2>By signing up, the donor agrees that:</h2>
          <ul className="list-disc ml-4">
            <li>
              All personal details (name, age, blood group, location, contact)
              are correct.
            </li>
            <li>
              Providing false information may result in account suspension or
              removal.
            </li>
          </ul>
        </div>
        <li className="font-bold">Use of Personal Data</li>
        <div className="mb-4">
          <h2>The donor agrees that:</h2>
          <ul className="ml-4 list-disc">
            <li>
              Their name, blood group, and contact number may be shared with
              people in need of blood.
            </li>
            <li>The platform may contact the donor for:</li>
            <ul className="list-disc ml-4">
              <li>Blood donation requests</li>
              <li>Donation reminders</li>
              <li>Emergency alerts</li>
            </ul>
            <li>
              All personal data will be handled according to privacy and
              security standards.
            </li>
          </ul>
        </div>
        <li className="font-bold">Voluntary Donation</li>
        <div className="mb-4">
          <ul className="ml-4 list-disc">
            <li>Blood donation is completely voluntary.</li>
            <li>Donor can refuse a donation request at any time.</li>
            <li>
              Donor can deactivate their donor account whenever they choose.
            </li>
          </ul>
        </div>
        <li className="font-bold">Liability</li>
        <div className="mb-4">
          <ul className="ml-4 list-disc">
            <li>Blood donation is completely voluntary.</li>
            <li>Donor can refuse a donation request at any time.</li>
            <li>
              Donor can deactivate their donor account whenever they choose.
            </li>
          </ul>
        </div>
        <li className="font-bold">Communication Consent</li>
        <div className="mb-4">
          <ul className="ml-4 list-disc">
            <li>
              Donor agrees to receive SMS, phone calls, or emails related to
              blood donation.
            </li>
            <li>Emergency request notifications may be sent anytime.</li>
          </ul>
        </div>
        <li className="font-bold">Account Deactivation</li>
        <div className="mb-4">
          <h2>The donor account may be removed if:</h2>
          <ul className="ml-4 list-disc">
            <li>Information is found incorrect</li>
            <li>Donor violates policies</li>
            <li>Donor requests deactivation</li>
          </ul>
        </div>
        <li className="font-bold">Account Deactivation</li>
        <div>
          <h2>
            By checking the box and completing registration, the donor confirms:
          </h2>
          <ul className=" list-disc">
            <p>✔ They have read and understood these Terms & Conditions</p>
            <p>
              ✔ They agree to follow all rules and provide accurate information
            </p>
            <p>✔ The information I provided is completely correct</p>
            <p>✔ They understand the voluntary nature of donation</p>
          </ul>
        </div>
      </ol>
    </div>
  );
};

export default TermsAndConditionsEn;
