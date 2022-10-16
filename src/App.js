import React from "react";
import "./App.css";
import cube from "./helper";
import { square } from "./helper";
import MyComponent from "./MyComponent";
import NewCompWithProps from "./NewCompWithProps";

function App() {
    const message = () => {
        return "Welcome to Coffeee";
    };

    const name = "Vikas";

    return (
        <div className='App'>
            <h1>Coffee sample app</h1>
            <>
                <MyComponent />
                <p> the cube of 15 is {cube(15)}</p>
                <div>{message()}</div>
                <h2>Welcome, {name}</h2>
                <NewCompWithProps name='Vikas' age='29' />
                <NewCompWithProps name='Anil' age='30' />
                <NewCompWithProps name='Saurabh' age='28' />
            </>
        </div>
    );
}

export default App;

/**
 * JSX - JavaScript and XML
 *
 * very similar to html
 *
 * It shouldnt return more than one parent component.
 *
 * If more than one component, it should be wrapped inside a component or
 * React fragment
 *
 * class --> className
 * onclick -- onClick
 * onchange -- onChange
 * event listeners will change a little
 * In JSX, any component can only return one parent element
 *
 */
