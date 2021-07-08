import styles from './AddToCart.module.css';
const AddToCart = () => (

    <div className={styles.fondoCarrito}>
        <h2>Carrito de Compras</h2>
        <p>Producto 1 - 5 u - $1000</p>
        <p>Producto 1 - 5 u - $1000</p>
        <p>Producto 1 - 5 u - $1000</p>

        <h3>Total: <b>$3000</b></h3>
        <button type="button" className="btn btn-outline-light">Confirmar compra</button>

    </div>
)
export default AddToCart;