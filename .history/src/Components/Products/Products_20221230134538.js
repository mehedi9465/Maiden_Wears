import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const { routeId } = useParams();

  useEffect(() => {
    if (routeId === "stores") {
      axios
        .get(
          `https://raw.githubusercontent.com/mehedi9465/Data-files/main/store.json`
        )
        .then(({ data }) => setStores(data));
    }
    axios
      .get(
        `https://raw.githubusercontent.com/mehedi9465/Data-files/main/products.json`
      )
      .then(({ data }) => {
        console.log(data);
        const filtered = data.filter((product) => product.cate === routeId);
        console.log(filtered);
        setProducts(filtered);
      });
  }, [routeId]);

  return (
    <div className="bg-white container mx-auto">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          New Arrivals
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            stores?.
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
