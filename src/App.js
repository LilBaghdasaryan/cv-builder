import React from "react";
import Left from "./components/left";
import Right from "./components/right";
import myClasses from './styles.module.css'

export default function App() {
    return (
       <div className={myClasses.app}>
           <Left />
           <Right />
       </div>
    );
}
