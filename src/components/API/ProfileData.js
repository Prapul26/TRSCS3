import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProfileData = () => {
  const [myData, setMyData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    about: "",
    city: "",
    state: "",
    country: "",
    address: "",
    linkedIn: "",
    businessName: "",
    businessDescription: "",
    website: "",
    imagePreview: "",
    states: [],
    name:"",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("https://tracsdev.apttechsol.com/api/my-profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Full API Response:", response.data);
        const data = response.data;
        setMyData({
          firstName: data.user.first_name || "",
          lastName: data.user.last_name || "",
          email: data.user.email || "",
          phone: data.user.phone || "",
          about: data.user.about || "",
          city: data.user.city || "",
          state: data.user.state || "",
          country: data.user.country || "",
          address: data.user.address || "",
          linkedIn: data.user.linkedIn || "",
          businessName: data.user.business_name || "",
          businessDescription: data.user.business_description || "",
          website: data.user.website || "",
          imagePreview: data.user.image || "",
          states: data.states || [],
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>
        Hiii {myData.firstName} {myData.lastName}, my country is {myData.country}.
      </p>

      <label htmlFor="state">My states are: </label>
      <select id="state" value={myData.state} onChange={(e) => setMyData({ ...myData, state: e.target.value })}>
        <option value="">Select State</option>
        {myData.states.map((stateObj) => (
          <option key={stateObj.id} value={stateObj.name}>
            {stateObj.name}
          </option>
        ))}
      </select>

      <p>My profile image:</p>
      {myData.imagePreview ? (
        <img src={myData.imagePreview} alt="Profile" style={{ width: '150px', height: 'auto' }} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};

export default ProfileData;
