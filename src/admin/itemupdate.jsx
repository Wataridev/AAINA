import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Loadinganimation from "../components/loadinganimation";
import Successanimation from "../components/successanimation";
import Cancelanimation from "../components/cancelanimation";
const Itemupdate = () => {
  const [items, setitems] = useState([]);
  const [category_choice, setcategory] = useState("");
  const [product_name, setproduct] = useState("");
  const [price, setPrice] = useState(0);
  const [bestselling, setBestselling] = useState(false);
  const [newarrival, setNewarrival] = useState(false);
  const [soldout, setSoldout] = useState(false);
  const [removeproduct, setremove] = useState(false);
  const [status, setstatus] = useState("");

  const handleSubmit = async () => {
    setstatus("loading");
    const selectedItem = items.find((item) => item.name === product_name);
    if (!selectedItem) return alert("Product not found");
    const id = selectedItem._id;

    if (removeproduct) {
      try {
        await axios.put(`http://localhost:5000/productremove/${id}`);
      } catch (err) {
        console.error(err);
      } finally {
        setremove(false);
      }
    }

    try {
      await axios.put(`http://localhost:5000/product/${id}`, {
        price,
        Bestselling: bestselling,
        NewArrival: newarrival,
        soldout,
      });
      setstatus("success");
      setcategory("");
      setPrice(0);
      setproduct("");
      setBestselling("");
      setNewarrival("");
      setSoldout("");
    } catch (err) {
      console.error(err);
      setstatus("failed");
    }
  };

  useEffect(() => {
    async function fetchitem() {
      try {
        const data = await axios.get("http://localhost:5000/products");

        setitems(data.data);
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    }
    fetchitem();
  }, []);

  useEffect(() => {
    function getdata() {
      const product = items.find((item) => item.name == product_name);
      if (product) {
        console.log(product);
        setPrice(Number(product.price) || 0);
        setBestselling(product.Bestselling || false);
        setNewarrival(product.NewArrival || false);
        setSoldout(product.soldout || false);
      }
    }
    getdata();
  }, [items, product_name]);

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setstatus("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <>
      <div className="h-[80%] w-[50%] border border-white relative bg-[#1E1E1E] rounded-3xl text-white font-[Jura] flex items-center  flex-col">
        {status && (
          <div className="absolute w-full h-full flex bg-black border rounded-3xl opacity-[0.8] justify-center items-center ">
            {status === "loading" && <Loadinganimation />}
            {status === "success" && <Successanimation />}
            {status === "failed" && <Cancelanimation />}
          </div>
        )}
        <a className="text-[22px] font-bold mt-6">Product Operations</a>
        <div className="h-[70%] w-full mt-16 ">
          <span className="flex justify-evenly items-center">
            <span className="w-1/2 flex items-center justify-evenly ">
              <label className="font-bold">Category:</label>
              <select
                className="h-[30px] rounded-lg text-white bg-[#414141]"
                value={category_choice}
                onChange={(e) => setcategory(e.target.value)}
              >
                <option value="">--Select--</option>
                <option value="Rings">Rings</option>
                <option value="Chains">Chains</option>
                <option value="Necklaces">Necklaces</option>
                <option value="Braclets">Braclets</option>
                <option value="Earrings">Earrings</option>
                <option value="Charms">Charms</option>
              </select>
            </span>
            <span className="w-1/2 flex items-center justify-evenly ">
              <label className="font-bold">Product Name:</label>
              <select
                value={product_name}
                className="text-white w-[120px] h-[30px] bg-[#414141]  rounded-lg "
                onChange={(e) => setproduct(e.target.value)}
              >
                <option value="">--Select--</option>

                {items
                  .filter((item) => item.category === category_choice)
                  .map((item) => (
                    <option value={item.name} key={item._id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </span>
          </span>

          <div className="h-[35%] w-full flex  items-center justify-evenly text-xl  ">
            <span className=" w-1/2 flex justify-evenly">
              <label>BestSeller:</label>
              <select
                value={bestselling.toString()}
                onChange={(e) => {
                  setBestselling(e.target.value === "true");
                }}
                className=" h-[30px] w-[100px] text-sm bg-[#414141] rounded-lg"
              >
                <option value="">--Select--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </span>
            <span className="w-1/2 flex justify-evenly items-center">
              <label className="font-semmibold">New Arrival:</label>
              <select
                value={newarrival.toString()}
                onChange={(e) => {
                  setNewarrival(e.target.value === "true");
                }}
                className=" h-[30px] w-[100px] text-sm bg-[#414141] rounded-lg"
              >
                <option value="">--Select--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </span>
          </div>

          <span className=" flex justify-evenly items-center">
            <span className="text-xl flex justify-evenly pr-4">
              <label>Change Price:</label>
              <input
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                }}
                type="number"
                className="border rounded-lg pl-4 text-sm h-[30px] w-[80px]"
              ></input>
            </span>
            <span className="w-[200px] flex justify-evenly items-center">
              <label className="font-semibold">Sold Out:</label>
              <select
                value={soldout.toString()}
                onChange={(e) => {
                  setSoldout(e.target.value === "true");
                }}
                className="bg-[#414141] h-[30px] w-[100px] text-sm rounded-lg"
              >
                <option value="">--Select--</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </span>
          </span>
          <span className="h-20 w-full flex justify-center items-center">
            <label className="font-bold">Remove Item:</label>
            <select
              value={removeproduct.toString()}
              onChange={(e) => {
                setremove(e.target.value === "true");
              }}
              className=" h-[30px] w-[100px] text-sm bg-[#414141] rounded-lg"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </span>
        </div>
        <button
          onClick={() => handleSubmit()}
          className=" absolute top-5 right-5 h-[30px] w-[60px] mb-4 cursor-pointer rounded-lg bg-green-800"
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default Itemupdate;
