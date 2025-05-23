export default function Card({ header, footer, children }) {
    debugger
    return <div style={styles.card}>
        <div style={styles.header}>{header}</div>
        <div style={styles.body}>{children}</div>
        <div style={styles.footer}>{footer}</div>
    </div>
}

const styles = {
    card: {
        border: '2px solid red',
        padding: '15px',
        width: '300px',
        margin: '1rem auto'
    },
    header: {
        fontWeight: "bold"
    },
    footer: {
        fontStyle: "italic"
    },
    body: {
        marginBottom: "8px"
    }
}
