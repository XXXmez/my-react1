import React, { useState, useEffect } from "react";
import axios from "axios";
import Items from "./Items";
import NavPages from "./NavPages";
import "./Pagination.css";

const Pagination = ({ urlBase = "" }) => {
  const [recordBase, setRecordBase] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [countItems] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const recordData = await axios.get(urlBase);
      setRecordBase(recordData.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="paginations" style={loading ? { opacity: "0.5" } : {}}>
      <Items
        itemsBase={recordBase}
        currentPage={currentPage}
        countItems={countItems}
      />

      <NavPages
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        baseLength={recordBase.length}
        countItems={countItems}
      />
    </div>
  );
};

export default Pagination;
