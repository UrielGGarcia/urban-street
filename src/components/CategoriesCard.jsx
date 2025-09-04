
function CategoriesCard(props) {
    return (
        <div className="w-full h-60 bg-[#121516]  rounded-2xl flex items-center justify-between ">
            <div className=" ml-10">
                <p className="text-7xl font-semibold font-serif">
                    COLECCIÓN DE
                </p>
                <p className="text-6xl font-semibold font-serif">
                    PRODUCTOS
                </p>
                <button className="mt-5 rounded-lg border-white p-2 bg-[#f24427] hover:scale-110 transition-transform">Ver nuevas colecciones</button>
            </div>
            <img src={props.ruta} alt="" className="w-90 mr-15 -mt-10"/>
        </div>
    );
}

export default CategoriesCard;