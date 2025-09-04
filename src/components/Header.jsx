

export function Header() {
    return (
        <div className="fixed w-full top-0 flex border items-center justify-between">
            <div className="flex items-center ml-10  ">
                <img src="/logosinfondo.png" alt="" className="w-30 " />
                <h1 className="font-serif text-white font-semibold text-4xl">UrbanStreet</h1>
            </div>
            <div className="flex text-white underline gap-10  -mr-40">
                <a href="">INICIO</a>
                <a href="">PRODUCTOS</a>
                <a href="">SOBRE NOSOTROS</a>
                <a href="">CONTACTO</a>
            </div>
            <div className="flex gap-20  rounded-2xl mr-5">
                <div className="border border-white rounded-2xl flex">
                    <input type="text" className="text-white p-2 rounded-2xl" />
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(2,2)"><path d="M56.59961,21.59961c-22.5,0 -40.79883,18.50117 -40.79883,41.20117c0,22.8 18.29883,41.19922 40.79883,41.19922c10.3,0 19.70039,-3.90078 26.90039,-10.30078l2.30078,2.30078l-2.10156,2.19922c-1.2,1.2 -1.2,3.10078 0,4.30078l18,18.19922c0.6,0.6 1.30156,0.90039 2.10156,0.90039c0.8,0 1.59961,-0.30039 2.09961,-0.90039l8,-8.09961c1.1,-1.2 1.10039,-3.09922 -0.09961,-4.19922l-18,-18.20117c-0.6,-0.6 -1.30156,-0.89844 -2.10156,-0.89844c-0.8,0 -1.59961,0.29844 -2.09961,0.89844l-2.09961,2.20117l-2.30078,-2.40039c6.3,-7.3 10.20117,-16.79922 10.20117,-27.19922c0,-22.7 -18.30078,-41.20117 -40.80078,-41.20117zM56.59961,27.69922c19.2,0 34.80078,15.80117 34.80078,35.20117c0,19.4 -15.60078,35.09961 -34.80078,35.09961c-19.2,0 -34.79883,-15.69961 -34.79883,-35.09961c0,-19.4 15.59883,-35.20117 34.79883,-35.20117zM56.69922,40.19922c-9.5,0 -17.99922,6.10156 -21.19922,15.10156c-0.5,1.3 0.19961,2.89883 1.59961,3.29883c0.3,0.1 0.60039,0.20117 0.90039,0.20117c1.1,0 2.1,-0.70078 2.5,-1.80078c2.4,-6.9 8.99922,-11.59961 16.19922,-11.59961c1.4,0 2.60156,-1.19961 2.60156,-2.59961c0,-1.4 -1.20156,-2.60156 -2.60156,-2.60156zM37.69922,64.90039c-1.4,0 -2.59961,1.09961 -2.59961,2.59961v0.40039c0.1,1.4 1.20117,2.59961 2.70117,2.59961c1.4,0 2.59961,-1.19961 2.59961,-2.59961v-0.30078c0,-1.5 -1.09961,-2.69922 -2.59961,-2.69922zM93.80078,96.59961l13.79883,14l-3.79883,3.80078l-13.80078,-14z"></path></g></g>
                    </svg>
                </div>
                <button >
                    <svg
                        className="hover:scale-110 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                    >
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 
      0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.82 14l.93-2h8.45c.75 
      0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 0 0 0-.87-1.48H5.21l-.94-2H0v2h2l3.6 
      7.59-1.35 2.44C4.52 14.37 5.48 16 7 16h12v-2H7.82z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Header;