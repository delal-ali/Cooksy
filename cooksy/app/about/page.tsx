const About = () => {
    return (
      <div className="min-h-screen bg-yellow-50 p-8 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">About Our Cooksy</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
          Welcome to our cozy corner of the web — a place where flavor meets tradition! 
          We’re passionate about sharing authentic and delicious recipes from Ethiopia and beyond.
          Whether you're a beginner or a seasoned home cook, we have something special just for you.
        </p>
  
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              To inspire people to cook at home and explore the rich world of food with simple, 
              accessible, and authentic recipes.
            </p>
          </div>
  
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p className="text-gray-600">
              Born out of a love for Ethiopian dishes and family traditions, we started this site to 
              preserve and share recipes passed down through generations.
            </p>
          </div>
  
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
            <p className="text-gray-600">
              From classic dishes like Doro Wat and Injera to modern twists and healthy options, 
              our recipes come with clear instructions, photos, and helpful tips.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  