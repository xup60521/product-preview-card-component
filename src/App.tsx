import IconCart from "/images/icon-cart.svg";

export default function App() {
    return (
        <main className="w-full min-h-screen bg-c_Cream flex flex-col items-center justify-center p-4">
            <div className="lg:grid grid-cols-2 flex flex-col rounded-lg overflow-hidden lg:w-[40rem]">
                <div className="lg:aspect-[2/3] aspect-[686/480] lg:bg-[url(/images/image-product-desktop.jpg)] bg-[url(/images/image-product-mobile.jpg)] bg-cover h-full"></div>
                <div className="flex flex-col bg-white p-8 gap-6">
                    <span className="font-montserrat tracking-widest font-medium text-c_Dark_grayish_blue">PERFUME</span>
                    <h1 className="font-fraunces lg:text-[2.25rem] text-3xl leading-[2.25rem] font-black">Gabrielle Essence Eau De Parfum</h1>
                    <span className="font-montserrat text-c_Dark_grayish_blue font-medium text-sm">
                        A floral, solar and voluptuous interpretation composed
                        by Olivier Polge, Perfumer-Creator for the House of
                        CHANEL.
                    </span>
                    <div className="flex items-center gap-5">
                        <span className="font-fraunces text-c_Dark_cyan text-[2.25rem] font-bold">$149.99</span>
                        <span className="font-montserrat text-c_Dark_grayish_blue line-through text-sm">$169.99</span>
                    </div>
                    <button className="bg-c_Dark_cyan flex hover:bg-[#243f32] transition items-center justify-center py-4 gap-2 rounded-lg">
                        <img src={IconCart} alt="cart icon" />
                        <span className="font-montserrat text-white text-sm font-medium">Add to Cart</span>
                    </button>
                </div>
            </div>
        </main>
    );
}
