import Link from "next/link";

const Navbar = () => {
    return (
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <h1 className="text-xl font-bold">Delicious Meals</h1>
        
        <nav className="flex space-x-6">
          <Link href="/home" className="font-bold">Home</Link>
          <Link href="/reciepe" className="font-bold">Receipes</Link>
          <Link href="/about" className="font-bold">About Us</Link>
        </nav>
        
      
      </div>
    );
  };

export default Navbar;