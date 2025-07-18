import React from "react";
import { Profile } from "@/types/profile";

const ContactDetails = ({
  phone,
  email,
  address,
}: Profile["contactDetails"]) => {
  return (
    <>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Contact Details
      </h2>
      <p className="text-gray-700 dark:text-gray-200 text-base mb-2">
        <strong className="text-gray-900 dark:text-gray-100">Phone:</strong>{" "}
        {phone}
      </p>
      <p className="text-gray-700 dark:text-gray-200">
        <strong className="text-gray-900 dark:text-gray-100">Email:</strong>{" "}
        {email}
      </p>
      {address && (
        <p className="text-gray-700 dark:text-gray-200">
          <strong className="text-gray-900 dark:text-gray-100">Address:</strong>{" "}
          {address}
        </p>
      )}
    </>
  );
};

export default ContactDetails;
