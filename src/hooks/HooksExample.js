import UseEffectHookExample from "./UseEffectHookExample";
import UseReducerHookExample from "./UseReducerHookExample";
import UseRefHookExample from "./UseRefHookExample";
import WithoutContext from "./WithoutContext";
import WithContext from "./WithContext";
import UseCustomHook from "./UseCustomHook";

function HooksExample() {
    const [todos] = UseCustomHook("https://jsonplaceholder.typicode.com/todos");
    const [albums] = UseCustomHook("https://jsonplaceholder.typicode.com/albums");

    return (<div className="m-4">
        <div>
            <h1>Todos List using custom hook</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.title}</li>
                ))}
            </ul>
        </div>

        <div>
            <h1>Albums List using custom hook</h1>
            <ul>
                {albums.map((album, index) => (
                    <li key={index}>{album.title}</li>
                ))}
            </ul>
        </div>
        <UseRefHookExample />
        <WithoutContext />
        <WithContext />
        <UseReducerHookExample />
        <UseEffectHookExample />
    </div>);
}

export default HooksExample;