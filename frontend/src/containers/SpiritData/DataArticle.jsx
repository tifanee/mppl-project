import React, { useState, useEffect } from "react";
import "./spiritData.css";

import axios from "axios";
import { Link } from "react-router-dom";

import { TableActions, TableArticle } from "../../components/index";

const DataAricle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const location = {
    url: "http://localhost:8000/api/articles",
    route: "/article"
  }

  const getData = async () => {
    const response = await axios.get("http://localhost:8000/api/articles");
    setData(response.data);
  };

  return (
    <div className="data-container">
      <div className="spirit__heading">
        <h1>ARTIKEL</h1>
      </div>

      <Link to={'/admin/article/add'}>
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
              <p>title</p>
            </div>
            <div className="content__head-center">
              <p>author</p>
            </div>
            <div className="content__head-center">
              <p>body</p>
            </div>
            <div className="content__head-center">
              <p>cover_image</p>
            </div>
            <div className="content__head-center">
              <p>is_published</p>
            </div>
            <div className="content__head-center">
              <p>created_date</p>
            </div>
            <div className="content__head-center">
              <p>published_date</p>
            </div>
          </div>
          {data.map((params) => (
            <TableArticle data={params} key={params._id} />
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

export default DataAricle;
