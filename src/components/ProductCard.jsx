
function ProductCard(props) {
    return (
        <div className="flex flex-col w-70  bg-[#171819]  gap-1 items-center rounded-xl">
            <img src={props.ruta} alt="" className="w-60 h-70"/>
            <p className="text-2xl font-semibold">{props.nombre}</p>
            <p className="text-xl ">${props.precio}</p>
            <button className="rounded-sm text-white bg-[#ab1a00]  p-0.5 mb-3 hover:scale-105 cursor-pointer">AGREGAR AL CARRITO</button>
        </div>
    );
}

export default ProductCard;