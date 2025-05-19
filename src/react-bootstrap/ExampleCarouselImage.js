function ExampleCarouselImage(props) {
    return (<>
        <div class="carousel-item active">
            <img src={props.image} class="d-block w-100" alt={props.text} />
        </div></>);
}

export default ExampleCarouselImage;