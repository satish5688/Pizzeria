import React, { useEffect, useState } from "react";
import axios from "axios";


function OrderPage() {
  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/pizza").then((resq) => {
      setPizza(resq.data);
    });
  }, []);

  return (
    <div className="container px-5 py-2 border">
      <div className="row row-cols-2">
        {pizza.map((item) => {
          return (
            <div key={item.id} className="col border mt-3 shadow p-3  bg-white rounded">
              <div className="d-flex">
                <div className="ml-3 p-2">
                  <div>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <b>Ingreadiants : </b>
                    <p>{item.ingredients}</p>
                  </div>
                  <div>
                    <b>Topings : </b>
                    <p>{item.topping}</p>
                  </div>
                </div>
                <div style={{ width: "200px" }} className="text-center ">
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={`${item.image}`}
                    className="mt-1"
                  />
                  <p
                    className={
                      "text-capitalize mt-1 text-white" +
                      (item.type == "veg" ? " bg-success" : " bg-danger")
                    }
                  >
                    {item.type}: <b>₹{item.price}</b>
                  </p>

                  <button type="button" className="btn btn-warning btn-sm mt-1 text-light fw-bold">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderPage;
