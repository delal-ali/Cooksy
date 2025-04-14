import DonutRecipeCard from "../components/DonutCard";

interface RecipeProps {
  image: string;
  title: string;
  description: string;
}

const Recipes = [
  {
    image: '/amba.jpg',
    title: "Ambasha",
    description: "Ambasha is a soft, slightly sweet traditional Ethiopian and Eritrean bread. Flavored with spices like cardamom and often decorated with beautiful patterns, it’s usually served during holidays and special occasions with coffee or tea."
  },
  {
    image: '/aneb.jpg',
    title: "Anebabero",
    description: "Anebabro is a traditional Ethiopian flatbread made from wheat flour. It's soft, slightly chewy, and often used to wrap or scoop up stews and vegetables. Simple yet flavorful, it's commonly enjoyed during everyday meals across Ethiopia."
  },
  {
    image: "/cheche.jpg",
    title: "Chechebsa",
    description: "Chechebsa, also known as kita firfir, is a traditional Ethiopian breakfast dish made from pieces of flatbread sautéed in spiced butter and berbere (a chili spice mix). Warm, flavorful, and comforting, it’s often served with honey or yogurt and enjoyed with a cup of coffee or tea.o"
  }
];

const RecipePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(/Beya.jpg)` }}
      >
        <div className="text-center px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get inspired, cook with passion, and savor
          </h1>
          <p className="text-xl text-white opacity-90">
          unforgettable moments at the table
          </p>
        </div>
      </div>

      {/* Popular Recipes */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
        Most searched recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  

                  {/* Recipe Cards 2-4 */}
                  {[
                      { id: 2, name: "Dorowet", image: "/doro.jpg",description:"Doro Wet is a rich and spicy Ethiopian chicken stew made with tender chicken, hard-boiled eggs, onions, and a flavorful blend of berbere spice and niter kibbeh (spiced butter). " },
                      { id: 3, name: "Gomen", image: "/gomen.jpg",description:"Gomen is a traditional Ethiopian dish made from slow-cooked collard greens or kale, seasoned with garlic, onions, and spiced butter. " },
                      { id: 4, name: "Kitfo", image: "/kitfo.jpg",description:"Kitfo is a traditional Ethiopian dish made from finely minced raw or lightly cooked beef, seasoned with mitmita (spicy chili powder) and niter kibbeh (spiced clarified butter). " },
                      { id: 5, name: "Tibs", image: "/tibs.jpg",description:"Tibs is a popular Ethiopian dish made of sautéed meat—usually beef or lamb—cooked with onions, garlic, and peppers. It can be mild or spicy and is often served with injera" }
                  ].map((recipe) => (
                      <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url("${recipe.image}")` }}></div>
                          <div className="p-6">
                              <h3 className="font-bold text-xl text-gray-800 mb-2">{recipe.name}</h3>
                              <p className="text-gray-600">
                                  {recipe.description}
                              </p>
                              <button className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                                  See reciepe
                              </button>
                          </div>
                      </div>
                  ))}
              </div>
      </section>

      {/* Recent Recipes */}
      <section className="py-16 px-4 max-w-7xl mx-auto bg-amber-50 rounded-xl mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Brunch reciepe
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {Recipes.map((recipe, index) => (
            <DonutRecipeCard 
              key={index}
              image={recipe.image}
              title={recipe.title}
              description={recipe.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecipePage;