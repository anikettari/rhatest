import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Customer = () => {
  const location = useLocation();
  console.log(location);
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://607a90abbd56a60017ba2c5e.mockapi.io/Customer/${location.state.id}`
      )
      .then(function (res) {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <table cellspacing="70">
        <p className="title_text">Customer Details</p>
        <tr>
          <th className="title_text">Image</th>
          <th className="title_text">Full Name</th>
          <th className="title_text">Phone</th>
          <th className="title_text">Email</th>
          <th className="title_text">City</th>
          <th className="title_text">Country</th>
        </tr>

        <tr>
          <td>
            <img
              className="image_style"
              src={`https://randomuser.me/api/portraits/${
                info.gender == true ? "women" : "men"
              }/${info.id}.jpg`}
            ></img>
          </td>
          <td className="info_text">{info.name}</td>
          <td className="info_text">{info.phone}</td>
          <td className="info_text">{info.email}</td>
          <td className="info_text">{info.city}</td>
          <td className="info_text">{info.country}</td>
        </tr>
      </table>
    </div>
  );
};

export default Customer;
