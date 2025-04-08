const PopularRecipes = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12 min-h-screen">
            {/* Hero Section */}
            <div
                style={{ backgroundImage: 'url("/Beya.jpg")' }}
                className="flex flex-col items-center justify-center mb-16 h-96 bg-cover bg-center rounded-lg"
            >
                <div className=" bg-opacity-50 w-full h-full flex flex-col items-center justify-center rounded-lg">
                    <h1 className="text-4xl font-bold text-white px-8 text-center max-w-3xl">
                        Inspire-se, cozinhe com paixão e saboreie momentos inesquecíveis à mesa.
                    </h1>
                    <div className="w-24 h-1 bg-gray-300 mt-6"></div>
                </div>
            </div>

            {/* Popular Recipes Section */}
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">Receitas mais procuradas</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  

                    {/* Recipe Cards 2-4 */}
                    {[
                        { id: 2, name: "Panquecas", image: "/doro.jpg" },
                        { id: 3, name: "Omelete", image: "/gomen.jpg" },
                        { id: 4, name: "Smoothie", image: "/kitfo.jpg" },
                        { id: 5, name: "Smoothie", image: "/tibs.jpg" }
                    ].map((recipe) => (
                        <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("${recipe.image}")` }}></div>
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-gray-800 mb-2">{recipe.name}</h3>
                                <p className="text-gray-600">
                                    Receita bacana pra comer com os amigos de manhã.
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