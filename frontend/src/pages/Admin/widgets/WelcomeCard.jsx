import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function WelcomeCard() {
  const { username } = useContext(AuthContext);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">
        👋 Welcome, {username}!
      </h1>
      <p className="text-gray-600 mt-2">You're logged in as an Admin.</p>
    </div>
  );
}
