import "./App.css";

import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market to get this job done!!",
      desc: "Yo",
    },
    {
      sno: 2,
      title: "Go to the market to get this job done!!2",
      desc: "Yo2",
    },
    {
      sno: 3,
      title: "Go to the market to get this job done!!3",
      desc: "Yo3",
    },
  ];

  return (
    <>
      <Header title="MyTodosList" />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
