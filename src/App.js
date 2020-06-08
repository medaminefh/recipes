import React, { useState } from "react";
import "./App.css";
import { KEYS } from "./config";
import axios from "axios";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

export const random = () => Math.floor(Math.random() * 100 ** 30);

function App() {
  //state
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${KEYS.APP_ID}&app_key=${KEYS.APP_KEYS}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      if (!result.data.more) {
        setAlert("food doesn't exist");
      }
      if (result.data.more) {
        console.log(result.data);
        setQuery("");
        setAlert("");
        setRecipes(result.data.hits);
      }
    } else {
      setAlert("Please fill the Form");
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <div className="App">
      <h1> Food</h1>
      <form className="search-form" onSubmit={onSubmit}>
        {alert ? <Alert alert={alert} /> : null}
        <input
          onChange={onChange}
          autoComplete="off"
          type="text"
          placeholder="Search Food"
          value={query}
        />
        <input type="submit" value="search" />
      </form>
      <div className="recipes">
        {recipes && !alert ? (
          recipes.map((r) => <Recipe key={random()} recipe={r} />)
        ) : (
          <h2 style={{ fontSize: "50px", letterSpacing: "3px", color: "red" }}>
            4O4 No Data
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
