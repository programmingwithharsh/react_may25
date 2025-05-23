import Card from "./Card";

export default function App() {
    return <div>
        <Card
            header={<h3>Product Title</h3>}
            footer={<h3>Price 80,000</h3>}
        >
            <p>iPhone Product</p>
        </Card>
        <Card
            header={<h3>Product Title</h3>}
            footer={<h3>Price 70,000</h3>}
        >
            <p>Samsung Product</p>
        </Card>
        <Card
            header={<h3>User Info</h3>}
            footer={<button>Contact</button>}
        >
            <p>Name: Jane Doe</p>
            <p>Email: jane@gmail.com</p>
        </Card>
    </div>
}