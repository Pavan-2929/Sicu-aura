import React, { useEffect, useState } from "react";
import { FaSearch, FaSort } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, setUser } from "../redux/auth/userSlice";
import axios from "axios";
import computer from "../assets/computer.png";
import Header from "../components/Header";
import HospitalTable from "../components/HospitalTable";

const Hospitals = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [hospitals, setHospitals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://sicu-aura-backend.onrender.com/api/hospital/get",
        { withCredentials: true }
      );
      dispatch(login());
      dispatch(setUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getAllHospitals = async () => {
    setLoading(false);
    try {
      setLoading(true);
      const response = await axios.get(
        "https://sicu-aura-backend.onrender.com/api/hospital/get/all"
      );
      setHospitals(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllHospitals();
    getUser();
  }, []);

  const handleSearch = () => {
    getAllHospitals();
  };

  const filteredHospitals = hospitals.filter(
    (hospital) =>
      hospital.hospitalName &&
      hospital.hospitalName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#F3FAFF] pb-10">
      <Header />
      <div className="flex justify-end mr-48 mt-4">
        <img src={computer} alt="computer" />
      </div>
      <div className="flex justify-between items-center mx-20 mt-6">
        <div>
          <h1 className="text-3xl font-bold">Hospital Registration</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center shadow-md px-4 rounded-md p-2 w-[25rem] justify-between border border-gray-300 bg-white">
            <input
              type="text"
              placeholder="Search"
              className="outline-none ml-1"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <FaSearch className="text-gray-400 ml-1" onClick={handleSearch} />
          </div>
          <div className="ml-2 p-3 border border-gray-300 bg-white shadow-md rounded-md">
            <FaSort className="text-gray-400" />
          </div>
        </div>
      </div>
      {loading ? (
        <h1 className="text-center mt-10 text-4xl font-semibold">Loading...</h1>
      ) : (
        <div className="mx-20 mt-6">
          <HospitalTable hospitals={filteredHospitals} />
        </div>
      )}
    </div>
  );
};

export default Hospitals;
