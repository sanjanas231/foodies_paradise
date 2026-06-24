 import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";


ReactDOM.createRoot(
document.getElementById("root")
)
.render(

<BrowserRouter>

<Routes>

<Route path="/" element={<App/>}>

<Route index element={<Home/>}/>

<Route path="menu" element={<Menu/>}/>

<Route path="contact" element={<Contact/>}/>

</Route>

</Routes>

</BrowserRouter>

)