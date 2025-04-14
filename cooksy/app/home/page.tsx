const PopularRecipes = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
            {/* Hero Section */}
            <div
                style={{ backgroundImage: 'url("/Beya.jpg")' }}
                className="flex flex-col items-center justify-center mb-16 h-80 bg-cover bg-clip-content rounded-lg"
            >
                <div className=" bg-opacity-50 w-2/4 h-2/4 flex flex-col items-center justify-center rounded-lg">
                    <h1 className="text-4xl font-bold text-white px-8 text-center max-w-3xl">
                        Get inspired, cook with passion, and savor unforgettable moments at the table
                    </h1>
                    <div className="w-24 h-1 bg-gray-300 mt-6"></div>
                </div>
            </div>

            {/* Popular Recipes Section */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Most searched recipes</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                    {/* Recipe Cards 2-4 */}
                    {[
                        { id: 2, name: "Dorowot", image: "/doro.jpg", description: "Doro Wat is a rich and spicy Ethiopian chicken stew made with tender chicken, hard-boiled eggs, onions, and a flavorful blend of berbere spice and niter kibbeh (spiced butter). " },
                        { id: 3, name: "Gomen", image: "/gomen.jpg", description: "Gomen is a traditional Ethiopian dish made from slow-cooked collard greens or kale, seasoned with garlic, onions, and spiced butter." },
                        { id: 4, name: "Kitfo", image: "/kitfo.jpg", description: "Kitfo is a traditional Ethiopian dish made from finely minced raw or lightly cooked beef, seasoned with mitmita (spicy chili powder) and niter kibbeh (spiced clarified butter)." },
                        { id: 5, name: "Tibs", image: "/tibs.jpg", description: "Tibs is a popular Ethiopian dish made of sautéed meat—usually beef or lamb—cooked with onions, garlic, and peppers. It can be mild or spicy and is often served with injera." }
                    ].map((recipe) => (
                        <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("${recipe.image}")` }}></div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-gray-800 mb-2">{recipe.name}</h3>
                                <p className="text-gray-600">
                                    {recipe.description}
                                </p>
                                <button className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                                    Ver receita
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularRecipes;