import React from "react";

const NameChild = props => {
    const { name, count } = props;
    console.log("name child reloading");

    return (
        <div>
            the name shown above is: {name}
            <h4>{count}</h4>
        </div>
    );
};

export default React.memo(NameChild);
