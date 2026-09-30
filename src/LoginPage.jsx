import Formulario from "./Formulario";
import Mensaje from "./Mensaje";
import Titulo from "./Titulo";

export default function LoginPage() {
    return <div className="mx-4"> 
        <Titulo texto="Login" />
        <Formulario />
        <Mensaje visible={ true } />
    </div>
}