import React from "react";
import ReactDom from "react-dom/client";


import Navigation from "./ProspectListpage.js";



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
        <ProspectListpage />
    </React.StrictMode>
)
