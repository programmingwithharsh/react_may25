function Title(props) {
    console.log("Title Component", props);
    return <div>
        <h1>This is Title Functional Component</h1>
        <div>Props title is {props.title}</div>
    </div>
}

export default Title;