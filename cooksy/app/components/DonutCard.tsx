interface reciepeProps{
    image:string,
    title: string,
    description: string

}
const DonutRecipeCard = ({image,title,description}:reciepeProps) => {
    return (
      <div className="flex flex-row w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Recipe Image - Fixed width */}
        <div className={`w-1/3 h-48 bg-[url(/aneb.jpg')] bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
        ></div>
        
        {/* Recipe Content - Flexible width */}
        <div className="w-2/3 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600">
{description}            </p>
          </div>
          <button className="w-fit mt-4 py-2 px-6 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-300">
            see reciepe
          </button>
        </div>
      </div>
    );
  };
  
  export default DonutRecipeCard;   