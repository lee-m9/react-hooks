import React, { useState } from "react";
import Translate from "./components/Translate";
import Dropdown from "./components/Dropdown";
import TextColor from "./components/TextColor";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a frond-end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS framework among engineers",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
        <br />
        <TextColor color={selected.value} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
