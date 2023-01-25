import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [word, setWord] = useState();
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [result, setResult] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        console.log(res.data)
        setWord(res.data.result[0].name)
      }).catch((err) => {
        console.log(err);
      });
  },
    [])

  const sum = () => {
    let str = `http://localhost:8000/add?a=${a}&b=${b}`
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value)
      }).catch((err) => console.log(err))
  }

  const sub = () => {
    let str = `http://localhost:8000/sub?a=${a}&b=${b}`
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value)
      }).catch((err) => console.log(err))
  }
  const mul = () => {
    let str = `http://localhost:8000/mul?a=${a}&b=${b}`
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value)
      }).catch((err) => console.log(err))
  }
  const division = () => {
    let str = `http://localhost:8000/division?a=${a}&b=${b}`
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value)
      }).catch((err) => console.log(err))
  }

  const clear = () => {
    let str = `http://localhost:8000/clear`
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult()
        setA()
        setB()
      }).catch((err) => console.log(err))
  }

  const formStyle = { width: "60px", height: "40px" }
  return (
    <div className='m-3'>
      <div className="d-flex gap-2 mb-2" >
        <input type={"text"} value={a} onChange={(e) => setA(e.target.value)} style={formStyle} className="form-control" />
        <input type={"text"} value={b} onChange={(e) => setB(e.target.value)} style={formStyle} className="form-control" />
        <input style={{ background: "orange" }} type={"text"} value={result} style={formStyle} className="form-control" />
      </div>
      <div className='d-flex gap-2'>
        <button className="btn btn-outline-success" onClick={sum}>+</button>
        <button className="btn btn-outline-success" onClick={sub}>-</button>
        <button className="btn btn-outline-success" onClick={mul}>*</button>
        <button className="btn btn-outline-success" onClick={division}>/</button>
        <button className="btn btn-outline-danger" onClick={clear}>clear</button>
      </div>
      <br />
    </div >
  );
}

export default App;
