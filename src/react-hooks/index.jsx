import React, { useCallback, useEffect, useMemo, useState } from "react";
import AgeChild from "./components/ageChild";
import NameChild from "./components/nameChild";

const ReactHooksComp = () => {
    const [count, setCount] = useState(0);
    const [square, setSquare] = useState(0);

    const changeCount = () => {
        setCount(count + 1);
    };

    const changeSquare = () => {
        const sqr = count * count;
        setSquare(sqr);
    };

    // whenever a comp is reloaded,
    // all its functions are created again with a new reference.
    // so, this can cause reloading of child components

    // so we can wrap such functions in a useCallback hook
    // syntax of useCallback is same as useEffect

    // useCallBack doesnt create a new instance of a component
    // unless any dep param has changed
    const changeAge = useCallback(() => {
        console.log("Age is changed");
    }, []);

    const getData = () => {
        // makes an api call to get some data
        console.log("data call in progress");
    };
    console.log("This is reloading");

    // if anything is being called multiple times
    // after every state update,
    // we need to stop it.

    // if we want it to run only once when the component
    // is loaded/mounted

    // useEffect hook in React takes two params
    // a callback Fn and a dependency array

    // all actions that we want to do only once.
    // should be in the callback fn

    // if it is dependent on any value, add that in the
    // dependency array

    // if it has to be called only once, leave the dependency
    //array as empty
    useEffect(() => {
        getData();
    }, []);

    // if you dont give dep array,
    // it will be called after every mount and state update
    useEffect(() => {
        console.log("this doesnt have dependency array");
    });

    // if we want changeSquare to be called again and again
    // whenever the valuf of count changes
    useEffect(() => {
        changeSquare();
    }, [count]);

    const complexCalculation = () => {
        console.log("complex logic here which is time taking");
    };

    // to stop the complex calculation from running again
    // wrap it inside useMemo
    useMemo(() => {
        complexCalculation();
    }, []);

    return (
        <div>
            <h1>Learning React hooks</h1>

            <div className='counter'>
                <h4>count = {count}</h4>
                <button onClick={changeCount}>Click me</button>

                <h4>The square of the counter is {square}</h4>

                <NameChild name={"VIkas"} count={count} />
                <AgeChild age={30} changeAge={changeAge} />
            </div>
        </div>
    );
};
export default ReactHooksComp;

// useCallback, React.memo, useMemo
