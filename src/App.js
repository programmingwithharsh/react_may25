import Main from './Main';
import { connect } from 'react-redux';

function mapStateToProps(state) { // map redux state to react props, builtin function
    debugger;
    return {
        products: state
    }
}

const App = connect(mapStateToProps)(Main);
export default App;