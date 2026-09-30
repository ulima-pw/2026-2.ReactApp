export default function Mensaje({ visible }) {
    return visible && 
        <div style={ { color : "red" } }>Error en Login</div>
}