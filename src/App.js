import "./App.css";
import Search from "./Search/Search";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <main className="app">
      <h1>Dictionary</h1>
      <h2>Type any word below</h2>
      <Search defaultKeyword="Dictionary" />
      <Footer />
    </main>
  );
}
