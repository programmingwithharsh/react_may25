import UseEffectHookExample from "./UseEffectHookExample";
import UseReducerHookExample from "./UseReducerHookExample";
import UseRefHookExample from "./UseRefHookExample";
import WithoutContext from "./WithoutContext";
import WithContext from "./WithContext";

function HooksExample() {
    return (<div className="m-4">
        <UseEffectHookExample />
        <UseReducerHookExample />
        <UseRefHookExample />
        <WithoutContext />
        <WithContext />
    </div>);
}

export default HooksExample;