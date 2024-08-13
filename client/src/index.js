import React from "react"
import { createRoot } from 'react-dom/client'
import App from "./App"
import "./style.scss"

createRoot(document.querySelector("#root")).render(<App/>)