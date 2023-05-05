import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer"
import "./Styles.css"

export default function App(){
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}