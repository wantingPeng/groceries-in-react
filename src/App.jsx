import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import Search from "./Search";
import apiRequest from "./apiRequest";
function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newInput, setNewInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setItems(data);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(fetchItems, 2000);
  }, []);

  function handleCheck(id) {
    console.log(items.length);
    console.log(id);

    const checkedItems = items.map((item) =>
      item.id == id ? { ...item, checked: !item.checked } : item
    );
    setItems(checkedItems);
    const checkedItem = checkedItems.filter((item) => item.id === id);
    console.log(checkedItem[0]);
    const optionsBOJ = {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(checkedItem[0]),
    };
    apiRequest(`${API_URL}/${id}`, optionsBOJ, setError);
  }
  function handleDelete(id) {
    const restedItem = items.filter((item) => item.id !== id);
    setItems(restedItem);
  }

  function handelSetNewInput(e) {
    setNewInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addItem(newInput);
    setNewInput("");
  }
  function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newList = { id, checked: false, item };
    const newItemList = [...items, newList];
    setItems(newItemList);
    const optionsBOJ = {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newList),
    };
    apiRequest(API_URL, optionsBOJ, setError);
  }

  const [search, setSearch] = useState("");

  function handleSetSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      <AddItem
        newInput={newInput}
        handelSetNewInput={handelSetNewInput}
        handleSubmit={handleSubmit}
      />
      <Search search={search} handleSetSearch={handleSetSearch} />
      {loading && !error && <p style={{ color: "blue" }}>loading.........</p>}
      {error && <p style={{ color: "red" }}>{`Error:${error}`}</p>}
      {!error && !loading && (
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      )}

      <Footer length={items.length} />
    </div>
  );
}

export default App;
