import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <main className="App">
      <h1>Dictionary</h1>
      <h2>Type any word below</h2>
      <Search defaultKeyword="Dictionary" />
    </main>
  );
}
