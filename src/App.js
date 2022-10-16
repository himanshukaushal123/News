import "./App.css";
import { List } from "./components/List";
import { Page } from "./components/Page";
import { Search } from "./components/Search";
import { useGlobalhook } from "./context.js";

function App() {
  const data = useGlobalhook();
  return (
    <>
      {/* <div><p>{data}</p></div> */}
      <Search />
      <Page />
      <List />
    </>
  );
}

export default App;
