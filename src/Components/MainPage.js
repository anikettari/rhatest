import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainPAge = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://607a90abbd56a60017ba2c5e.mockapi.io/Customer")
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
        setFilteredResults(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const searchItems = (searchValue) => {
    console.log(searchValue);
    setSearchInput(searchValue);

    const filteredData = data.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  };

  return (
    <div>
      <table cellspacing="10">
        <tr>
          <th className="title_text">Image</th>
          <th className="title_text">Full Name</th>
          <th className="title_text">Phone</th>
          <th className="title_text">Email</th>
          <th className="title_text">
            <select onChange={(e) => searchItems(e.target.value)}>
              <option value="All">All</option>
              {data.map((item) => (
                <option value={item.city}>{item.city}</option>
              ))}
            </select>
          </th>
          <th className="title_text">
            <select onChange={(e) => searchItems(e.target.value)}>
              <option value="All">All</option>
              {data.map((item) => (
                <option value="volvo">{item.country}</option>
              ))}
            </select>
          </th>
          <th>Details</th>
        </tr>
        {filteredResults.length > 0 ? (
          filteredResults.map((item) => (
            <tr>
              <td>
                <img
                  className="image_style"
                  src={`https://randomuser.me/api/portraits/${
                    item.gender == true ? "women" : "men"
                  }/${item.id}.jpg`}
                ></img>{" "}
              </td>
              <td className="info_text">{item.name}</td>
              <td className="info_text">{item.phone}</td>
              <td className="info_text">{item.email}</td>
              <td className="info_text">{item.city}</td>
              <td className="info_text">{item.country}</td>
              <td className="info_text">
                <Link to="/customer" state={{ id: item.id }}>
                  Customer Details
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <p>No data found</p>
        )}
      </table>
    </div>
  );
};

export default MainPAge;
