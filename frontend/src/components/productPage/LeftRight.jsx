import React, { useState } from "react";
import { useEffect } from "react";

import { Left } from "./Left";
import styles from "../../css/productsPage/leftright.module.css";
import NavbarTopSec from "../NavbarTopSec";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer/Footer";

export const LeftRight = () => {
  const API_URL = "https://healthkart-clone-backend.onrender.com/products/whey";
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not found");
        const listItems = await response.json();
        setItems(listItems);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, []);
  return (
    <>
      <NavbarTopSec />
      <Navbar />
      <div className={styles.warpperleftright}>
        <Left items={items} setItems={setItems} />
      </div>
      <Footer />
    </>
  );
};
