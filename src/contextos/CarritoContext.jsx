/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  // Obtener carrito de localStorage con validación
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });


  const [total, setTotal] = useState(() => {
    const totalGuardado = localStorage.getItem("total");
    return totalGuardado && !isNaN(totalGuardado) ? JSON.parse(totalGuardado) : 0;
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

    const calcularTotal = () => {
      return carrito.reduce((acumulador, item) => {
        return acumulador + (item.elemento.precio * item.cantidad);
      }, 0);
    };

    const nuevoTotal = calcularTotal();
    setTotal(nuevoTotal);
    localStorage.setItem("total", JSON.stringify(nuevoTotal));
  }, [carrito]);

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, total, setTotal }}>
      {children}
    </CarritoContext.Provider>
  );
};
