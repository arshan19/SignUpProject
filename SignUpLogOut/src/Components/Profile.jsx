import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center  min-h-screen">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-6">Profile</h2>
      
      {/* Profile Details */}
      <div className=" rounded-lg p-6 w-80 shadow-lg">
        <p className="mb-4 text-lg">
          <span className="font-semibold">Full Name :</span>
        </p>
        <p className="mb-4 text-lg">
          <span className="font-semibold">Email :</span> 
        </p>
        <p className="mb-6 text-lg">
          <span className="font-semibold">Password :</span> 
        </p>
        
        {/* Logout Button */}
        <button className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
