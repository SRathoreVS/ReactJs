import "./App.css";
import Cards from "./components/Cards";

function App() {
  let myObj = {
    username: "PriyaXsatyam",
    price: 260,
  };
  let newArr = [1, 2, 33, 4];
  return (
    <>
      <h1 className="bg-green-500 p-4 rounded-xl mb-4">
        Hello I am Tailwind Test
      </h1>
      <Cards />
      <Cards name="Satyam" oneObj={myObj} oneArr={newArr} />
    </>
  );
}

export default App;
