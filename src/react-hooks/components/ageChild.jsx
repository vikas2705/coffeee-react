import React from "react";

const AgeChild = props => {
    const { age, changeAge } = props;
    console.log("age child reloading");

    return <div>the age shown above is: {age}</div>;
};

export default React.memo(AgeChild);

// if the parent gets re-rendered, default behavior is child also
// gets re-rendered

// but if nothing is changing in the child, we can stop the
// unnecessary re-render

// using React.memo
// React.memo compares the prev props and the new props.
// and reloads the component only if they are different
