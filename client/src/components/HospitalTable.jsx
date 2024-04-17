import React from 'react'

const HospitalTable = ({hospitals}) => {
  return (
    <table className="w-full table-auto">
      <thead className="bg-[#0DF5E3]">
        <tr>
          <th className="px-4 py-2 rounded-l-full">No.</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Hospital Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Phone No.</th>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">State</th>
          <th className="px-4 py-2">Pincode</th>
          <th className="px-4 py-2 rounded-r-full">No. of Ambulance</th>
        </tr>
      </thead>
      <tbody>
        {hospitals.map((hospital, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#f5f5f5]"
            } text-center `}
          >
            <td className="px-4 py-2 rounded-l-full">{index + 1}</td>
            <td className="px-4 py-2">
              {new Date(hospital.hospitalRegistrationDate).toLocaleString(
                "en-IN",
                {
                  timeZone: "Asia/Kolkata",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              )}
            </td>

            <td className="px-4 py-2">{hospital.hospitalName}</td>
            <td className="px-4 py-2">{hospital.email}</td>
            <td className="px-4 py-2">{hospital.address}</td>
            <td className="px-4 py-2">{hospital.phoneNumber}</td>
            <td className="px-4 py-2">{hospital.city}</td>
            <td className="px-4 py-2">{hospital.state}</td>
            <td className="px-4 py-2">{hospital.pincode}</td>
            <td className="px-4 py-2 rounded-r-full">
              {hospital.numberOfAmbulanceAvailable}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HospitalTable
