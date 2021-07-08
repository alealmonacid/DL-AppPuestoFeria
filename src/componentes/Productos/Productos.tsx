import Productos from '../Producto/Producto';
import productData from "../Productos/P.json";

type Producto = {
  nombre: string;
  img_producto: string;
  categoria: string;
  precio: number;
  stock: number;
};


const ProductosTotal = () => {
  const productos: Producto[] = productData;

  return (
    <div className="row">
      
      {productos.map((producto, index) => (
      <Productos key={index} nombre={producto.nombre} img_producto={producto.img_producto} categoria={producto.categoria} precio={producto.precio} stock={producto.stock} />
))}
      
      
    </div>
      
    
  );
};
export default ProductosTotal
