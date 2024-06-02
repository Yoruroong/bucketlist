import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Card from "./Pages/Main";
import Stats from "./Components/Stats";
import Success from "./Pages/Success";
import Navbar from "./Components/Navbar"
import './App.css';
import {ClipLoader, DotLoader, MoonLoader, RingLoader, SyncLoader} from "react-spinners";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setisLoading] = useState([]);
  // https://jinh.kr/bucket/

  useEffect(() => {
    setisLoading(true)
    fetch('https://bucket-api.drz.kr/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setNotes(data)
        setisLoading(false)
      })
    document.title=new Date().getMonth() == 9 && new Date().getDate() == 9 ? "연우가 만든 버킷리스트" : "Bucket List by Yeonwoo"
  }, [])

  return (
    <div className="App-header">
      <Navbar />
      <h1 style={{ marginTop: "100px" }}># {new Date().getMonth() == 9 && new Date().getDate() == 9 ? "버킷리스트" : "BUCKETLIST"}</h1>
      {isLoading ? (<div><MoonLoader
        color={"#5cdb95"}
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>) : (
        <div>
        <Stats notes={notes} />
      <Routes>
        <Route path="/" element={<Card notes={notes}/>} />
        <Route path="/success" element={<Success notes={notes}/>} />
      </Routes>
      </div>
      )}
      
      <footer>
        <p align="center" className="copy">© 2020 - {new Date().getFullYear()}, Yeonwoo Seo </p>
      </footer>
    </div>
  );
}
