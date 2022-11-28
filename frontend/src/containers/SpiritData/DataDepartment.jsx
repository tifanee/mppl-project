import React, { useState, useEffect } from "react";
import "./spiritData.css";

import axios from "axios";
import { Link } from "react-router-dom";

import { TableDepartment, TableActions } from "../../components/index";

const DataDepartment = () => {
  const [departments, setDepartment] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  const location = {
    url: "http://localhost:8000/api/departments",
    route: "/department"
  }

  const getDepartments = async () => {
    const response = await axios.get("http://localhost:8000/api/departments");
    setDepartment(response.data);
  };

  return (
    <div className="data-container">
      <div className="spirit__heading">
        <h1>DEPARTEMEN</h1>
      </div>

      <Link to={'/admin/department/add'}>
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
              <p>dept_name</p>
            </div>
            <div className="content__head-center">
              <p>dept_code</p>
            </div>
            <div className="content__head-flex-start">
              <p>dept_image</p>
            </div>
            <div className="content__head-center">
              <p>gold_medal_count</p>
            </div>
            <div className="content__head-center">
              <p>silver_medal_count</p>
            </div>
            <div className="content__head-center">
              <p>bronze_medal_count</p>
            </div>
          </div>
          {departments.map((data) => (
            <TableDepartment data={data} key={data._id} />
          ))}
        </div>

        <div className="admin__spirit-action">
          <div className="admin__head-spirit">
            <div className="content__head-center head-actions">
              <p>Actions</p>
            </div>
          </div>
          {departments.map((data) => (
            <TableActions data={data} location={location} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataDepartment;
