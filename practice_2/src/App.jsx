import "./App.css";
import Table from "./components/table/Table";

function App() {
  const netIncomes = [
    {
      brand: "McDonalds",
      income: 1291283,
    },
    {
      brand: "Burger King",
      income: 1927361,
    },
    {
      brand: "KFC",
      income: 1098463,
    },
  ];

  const averageNetIncomes =
    netIncomes.reduce(
      (accumulator, element) => accumulator + element.income,
      0
    ) / netIncomes.length;

  return (
    <>
      <Table netIncomes={netIncomes} />
      <p>Average: {Math.trunc(averageNetIncomes)}</p>
    </>
  );
}

export default App;
