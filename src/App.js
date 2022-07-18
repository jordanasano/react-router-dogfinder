import './App.css';
import DogList from './DogList';
import axios from "axios";
import {useState} from "react";
import {v4 as uuid} from "uuid";
import { BrowserRouter,Navigate,Route, Routes } from 'react-router-dom';
import Nav from "./Nav"



function App() {
  const [dogList, setDogList] = useState([]);

  async function getDogs() {
    const dogList = (await axios.get("http://localhost:5001/dogs")).data;
    dogList.map(dog =>  ({...dog, id:uuid()}))
    setDogList(st => dogList);
  }

if(dogList.length === 0) getDogs();
console.log(dogList)

  return (
    dogList.length===0
    ? <div>{"loading"}</div>
    : <div className="App">

      <BrowserRouter>
      <Nav dogList = {dogList} />
      <Routes>
        <Route path="/dog" element={<DogList dogList={dogList}/>} />
        <Route path="*" element={<Navigate to="/dog"/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );

}

export default App;
