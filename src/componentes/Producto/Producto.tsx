interface ProductoProps {
  nombre: string;
  img_producto: string;
  categoria: string;
  precio: number;
  stock: number;
};

const Productos = ({nombre, img_producto, categoria, precio, stock}: ProductoProps) => {
    return ( 
        <div className="col-md-4 mt-5">
        <div className="card text-left">
          <img className="card-img-top" src={img_producto} alt="Imagen Fruta"></img>
          <div className="card-body">
            <h4 className="card-title">{nombre}</h4>
            <p className="card-text">Categoría: {categoria}</p>
            <p className="card-text">Precio: ${precio}</p>
            <p className="card-text">Stock: {stock}</p>
            <button type="button" className="btn btn-success">Comprar</button>
          </div>
        </div>
      </div>
    )
}

export default Productos
    