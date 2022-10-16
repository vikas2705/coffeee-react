const NewCompWithProps = props => {
    const { name, age } = props;
    return (
        <h2>
            My name is {name} and my age is {age}
        </h2>
    );
};

export default NewCompWithProps;
