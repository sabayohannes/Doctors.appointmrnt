import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [userData, setUserData] = useState({
    name: "Ediward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "251-9-555-333",
    address: {
      line1: "4 kutir mazoriya",
      line2: "torhayloch",
    },
    gender: "male",
    dob: "2000-01-20",
  });
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded"  src={userData.image} alt="" />
      {isEdit ? (
        <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target }))}
        />
      ) : (
        <p className=" font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}{" "}
      <hr className="bg-zinc-400 h-[1px] border-name" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
      </div>
      <div className=" grid grid-cols-[1fr_3fr] ga-y-2.5 mt-3 text-neutral-700">
        <p className="font-medium">Email id:</p>
        <p className="text-blue-500">{userData.email}</p>
        <p className="font-medium">phone</p>
        {isEdit ? (
          <input
          className="bg-gray-100 max-w-52"
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, phone: e.target }))
            }
          />
        ) : (
          <p className="text-blue-400">{userData.phone}</p>
        )}
        <p className="font-medium">Address:</p>
        {isEdit ? (
          <p>
            <input
            className="bg-gray-50"
              type="text"
              value={userData.address.line1}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target }))
              }
            />
            <br />
            <input
            className="bg-gray-50"
              type="text"
              value={userData.address.line2}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target }))
              }
            />
          </p>
        ) : (
          <p className="text-gray-500">
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-7">
          <p className="font-medium">GENDER:</p>
          {isEdit ? (
            <select className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">{isEdit?
      <button className="border border-primary px-8  py-2 rounded-full hover:bg-primary hover:text-white transition-all" onClick={()=>{setIsEdit(false)}}>Save Information</button>:
      <button  className =" border border-primary px-8  py-2 rounded-full hover:bg-primary hover:text-white transition-all"onClick={()=>{setIsEdit(true)}}>Edit</button>}</div>
    </div>
  );
};

export default MyProfile;