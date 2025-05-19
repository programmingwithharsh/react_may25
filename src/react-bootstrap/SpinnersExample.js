import Spinner from 'react-bootstrap/Spinner';

function SpinnerExample() {
    return (
        <>
            <h1>Spinner Example</h1>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="grow" variant="primary" />
        </>
    );
}

export default SpinnerExample;