import React, { useState, useEffect } from "react";
import "./spiritData.css";

import axios from "axios";
import { Link } from "react-router-dom";

import { TableActions, TableMatch } from "../../components/index";

const DataMatch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const location = {
    url: "http://localhost:8000/api/matchs",
    route: "/match"
  }

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/api/matchs");
    setData(response.data);
  };

  return (
    <div className="data-container">
      <div className="spirit__heading">
        <h1>PERTANDINGAN</h1>
      </div>

      <Link to={'/admin/match/add'}>
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
            <div className="content__head-center">
              <p>dept_name1</p>
            </div>
            <div className="content__head-center">
              <p>dept_name2</p>
            </div>
            <div className="content__head-center">
              <p>dept_image1</p>
            </div>
            <div className="content__head-center">
              <p>dept_image2</p>
            </div>
            <div className="content__head-center">
              <p>location</p>
            </div>
            <div className="content__head-center">
              <p>date</p>
            </div>
            <div className="content__head-center">
              <p>day</p>
            </div>
            <div className="content__head-center">
              <p>time</p>
            </div>
            <div className="content__head-center">
              <p>is_finished</p>
            </div>
            <div className="content__head-center">
              <p>score_result</p>
            </div>
          </div>
          {data.map((params) => (
            <TableMatch data={params} key={params._id} />
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

export default DataMatch;
