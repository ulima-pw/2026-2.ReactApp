export default function Formulario() {
    return <>
        <div className="mt-3">
            <input type="text" 
                className="border rounded-md px-1 py-1"
                placeholder="Ingrese username" />
        </div>
        <div className="mb-2 mt-2">
            <input type="password" 
                className="border rounded-md px-1 py-1"
                placeholder="Ingrese password" />
        </div>
        <div>
            <button type="button"
                className="bg-orange-600 text-gray-50 border rounded-lg shadow px-2 py-1 hover:bg-orange-300 hover:text-black">
                Ingresar
            </button>
        </div>
    </>
}