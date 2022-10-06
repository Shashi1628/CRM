import React from "react";
import ReactDom from "react-dom/client";


import Navigation from "./ProspectListpage";



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
        <Navigation />
    </React.StrictMode>
)
