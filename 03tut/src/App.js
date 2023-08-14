import "./App.css";
import Header from "./Header";

function App() {
  const handleNameChange = () => {
    const names = ["Winter", "Karina", "Ningning"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
