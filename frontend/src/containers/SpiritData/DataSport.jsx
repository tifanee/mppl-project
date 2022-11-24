import React, { useState, useEffect } from "react";
import "./spiritData.css";

import axios from "axios";
import { Link } from "react-router-dom";

import { TableActions, TableSport } from "../../components/index";

const DataSport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const location = {
    url: "http://localhost:8000/api/sports",
    route: "/sport"
  }

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/api/sports");
    setData(response.data);
  };

  return (
    <div className="data-container">
      <div className="spirit__heading">
        <h1>OLAHRAGA</h1>
      </div>

      <Link to={'/admin/sport/add'}>
        <div className="admin__add-button">
          <button onClick={() => {}}>Tambah</button>
        </div>
      </Link>

      <div className="admin__data-actions">
        <div className="admin__spirit-data">
          <div className="admin__head-spirit">
            <div className="content__head-flex-start">
              <p>_id</p>
            </div>
            <div className="content__head-center">
              <p>sport_name</p>
            </div>
            <div className="content__head-flex-start">
              <p>sport_image</p>
            </div>
            <div className="content__head-center">
              <p>tes</p>
            </div>
          </div>
          {data.map((params) => (
            <TableSport data={params} key={params._id} />
          ))}
        </div>

        <div className="admin__spirit-action">
          <div className="admin__head-spirit">
            <div className="content__head-center head-actions">
              <p>Actions</p>
            </div>
          </div>
          {data.map((params) => (
            <TableActions data={params} location={location} key={params._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataSport;
