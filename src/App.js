import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [order, setorder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeListOrderHandler = useCallback(() => {
    setorder((data) => !data);
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList
        className="App"
        title={listTitle}
        items={listItems}
        itemOrderChangehandler={order}
      />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeListOrderHandler}>
        {order === true ? "Descending order" : "Ascending order"}
      </Button>
    </div>
  );
}

export default App;
