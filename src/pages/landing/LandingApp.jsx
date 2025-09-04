import Header from "../../components/Header";
import cap1 from '../../assets/images/cap1.png';
import CategoriesCard from "../../components/CategoriesCard";
import { products } from "../../database/products";
import ProductCard from "../../components/ProductCard";


function LandingApp() {
    return (
        <div className="bg-[#080c0e]  h-300 flex flex-col">
            <Header />
            <div className="mr-30 ml-30 mt-43">
                <CategoriesCard ruta={cap1} />
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 mt-20 gap-5">
                    {products.map(producto =>
                        <ProductCard
                            ruta={producto.ruta}
                            nombre={producto.nombre}
                            precio={producto.precio}
                        />
                    )}
                </div>
            </div>

        </div>
    );
}

export default LandingApp;