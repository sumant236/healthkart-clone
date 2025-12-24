import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import EachProduct from "./EachProduct";

export const Products = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const goToUser = (user) => {
    navigate(`/products/${user.id}`);
  };
  useEffect(() => {
    fetch("https://healthkart-clone-backend.onrender.com/product")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div>
                {users.map((user) => {
                  return (
                    <>
                      <button onClick={() => goToUser(user)}>{user.id}</button>
                    </>
                  );
                })}
              </div>
            </div>
          }
        />
        <Route path=":id" element={<EachProduct />} />
        <Route path="new" element={<>New To the </>} />
      </Routes>
    </div>
  );
};
