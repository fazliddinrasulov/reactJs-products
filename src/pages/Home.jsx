import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const categories = ["all", ...new Set(data.map((item) => item.category))];
  const fetchAllData = async () => {
    try {
      const resp = await axios.get(`https://dummyjson.com/products?limit=0`);
      setData(resp.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  const filterProducts = (category) => {
    if (category === "all") {
      fetchAllData();
      return;
    }
    const newProducts = data.filter((item) => item.category === category);
    setData(newProducts);
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main>
      <div>
        {categories.map((item, index) => {
          return (
            <span
              key={index}
              className="btn"
              style={{ margin: "10px" }}
              onClick={() => filterProducts(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="products">
        {currentItems.map((item, index) => {
          return <Product key={index} product={item} />;
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
};

export default Home;
