
    
export const realizarFiltros = (nuevoSexo, nuevoPrecio, nuevoBuscador, array) => {
    let elementosFiltrados = array;

    if (nuevoSexo !== "todos") {
        elementosFiltrados = elementosFiltrados.filter((elemento) =>
            elemento.descripcion.toLowerCase().includes(nuevoSexo.toLowerCase())
        );
    }

    if (nuevoBuscador !== "") {
        elementosFiltrados = elementosFiltrados.filter((elemento) =>
            elemento.nombre.toLowerCase().includes(nuevoBuscador.toLowerCase())
        );
    }

    if (nuevoPrecio > 0) {
        elementosFiltrados = elementosFiltrados.filter((elemento) =>
            elemento.precio <= nuevoPrecio
        );
    }
    
    return elementosFiltrados
};

export const resultadoFilter = (sexo, precio, buscador, array, setMostrarPrecio, setElementos) => {
    setMostrarPrecio(precio);
    const nuevosElementos = realizarFiltros(sexo, precio, buscador, array);
    setElementos(nuevosElementos);
};

