import React, { useEffect, useState } from "react";
import axios from "axios";

function BuildPage() {
  const [Ingredients, setIngredients] = useState([]);
  const [selected, setSelected] = useState([]);

  // Hit backend api and fetch ingrediants list...
  useEffect(() => {
    axios
      .get("http://localhost:7000/ingrediants")
      .then((resp) => {
        setIngredients(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelected = (item) => {
    if (selected.filter((i) => i.id == item.id).length) { // Item id match with selected items and return their lenght.
      setSelected(selected.filter((i) => i.id != item.id)); // Store list of objects which doesn't match with item.id.
    } else {
      setSelected([...selected, item]); //Add new item if it's not exists in selected.
    }
  };

  return (
    <div className="border container  justify-content-center d-flex">
      <div className="px-5 my-2" style={{ width: "70%" }}>
        <p className="text-center mt-1">
          Pizzeria now gives you option to build your own pizza. custumize your
          pizza by choosing ingrediants from the list given below.
        </p>
        <table className="table table-bordered table-striped mx-auto">
          <tbody>
            {Ingredients.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={`${item.image}`} width="60" />
                  </td>
                  <td className="text-center">
                    <div className="d-flex fw-bold justify-content-center">
                      <p>{item.tname}</p>
                      <p style={{ marginLeft: "20px" }}>₹{item.price}</p>
                    </div>
                  </td>
                  <td>
                    <div className="form-check">
                      <input
                        onChange={() => handleSelected(item)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={"flexCheckDefault" + item.id}
                      />
                      <label
                        className="form-check-label fw-bold text-warning"
                        htmlFor={"flexCheckDefault" + item.id}
                      >
                        Add
                      </label>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3 style={{color:'rgb(71, 37, 144)'}}>
          Total Cost :{" "}
          {selected.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price, // Total all prices from selected state...
            0
          )}
        </h3>
        <div className="mx-auto p-2" style={{ width: "200px" }}>
          <button type="button" className="btn btn-dark text-warning fw-bold">
            Build Pizza
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuildPage;
