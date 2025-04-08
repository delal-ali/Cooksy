const Navbar = () => {
    return (
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <h1 className="text-xl font-bold">Delícias à Mesa</h1>
        
        <nav className="flex space-x-6">
          <a href="#" className="font-bold">Home</a>
          <a href="#" className="font-bold">Receipes</a>
          <a href="#" className="font-bold">About Us</a>
        </nav>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="search-toggle" 
            className="mr-2 h-4 w-4"
          />
          <label htmlFor="search-toggle">Search Reciepes</label>
        </div>
      </div>
    );
  };

export default Navbar;