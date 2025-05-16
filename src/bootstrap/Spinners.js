function Spinners() {
    return <>
        <h1>Spinner Example</h1>
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </>
}

export default Spinners;