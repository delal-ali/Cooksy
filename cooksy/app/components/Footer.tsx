import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-row justify-between">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Delícias à Mesa</h2>
        <div>
        <p className="text-gray-600 mb-6">Redes sociais:</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-400 transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
        </div>
        
        
        
      </div>
    </footer>
  );
};

export default Footer;
    

