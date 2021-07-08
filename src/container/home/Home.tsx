import PrimerComponente from '../../componentes/Componente_Usuario/CompUser';
import AddToCart from '../../componentes/addToCart/AddToCart';
import ProductosTotal from '../../componentes/Productos/Productos';


const Home = () =>{
    return (
        <div className="App">
       
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-lg-3 text-center">
            <PrimerComponente name="Alejandro" imgUsu="https://centromedicomontemar.cl/wp-content/uploads/2015/06/sin-perfil-297x300.png"/>
            </div>
            <div className="col-md-6 col-lg-6">
            <ProductosTotal/>
            </div>
            <div className="col-md-3 col-lg-3">
            <AddToCart/>
            </div>
          </div>
         
        </div>
        </div>
    )
}

export default Home;