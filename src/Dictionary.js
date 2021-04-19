import React from "react";
import "./Dictionary.css";
import Search from "./Search";

export default function Dictionary() {
  return (
    <main className="Dictionary">
      <h1>Dictionary</h1>
      <h2>Type any word below</h2>
      <Search />
    </main>
  );
}
