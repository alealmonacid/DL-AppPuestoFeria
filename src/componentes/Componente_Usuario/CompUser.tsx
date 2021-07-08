import styles from './CompUsu.module.css';


interface DataUser {
    name: string;
    imgUsu: string;

}

const PrimerComponente = ({name, imgUsu}: DataUser) => {
    return (
        
        <div>
            <img src={imgUsu} className={`mt-5 ${styles.imgUsuario}`}  alt="Imagen Perfil"/>
            <br/>    
            <h2>Hola <b>{name}</b></h2>
            <p>Bienvenido a la Feria Virtual</p>
        
        </div>
    );
}
export default PrimerComponente