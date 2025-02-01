const BentoGrid = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-8 gap-4 p-4">
        {/* Top Left Section */}
        <div className="col-span-1 row-span-4 bg-pink-200 text-black p-4 rounded-lg">
          <h3 className="font-bold">First Round of Funding</h3>
          <p className="text-xl mt-4">75%</p>
          <p>2.5K contributions last year</p>
        </div>
  
        {/* Top Middle Sections */}
        <div className="col-span-1 row-span-2 bg-gray-900 p-4 rounded-lg">
          <h3 className="font-bold">Project Views</h3>
          <p className="text-2xl">4.875</p>
        </div>
        <div className="col-span-1 row-span-2 bg-green-200 text-black p-4 rounded-lg">
          <h3>New Users</h3>
          <p className="text-2xl font-bold">57K</p>
        </div>
  
        {/* Top Right Section */}
        <div className="col-span-1 row-span-3 bg-gray-300 text-black p-4 rounded-lg">
          <h3>Daily New Clients</h3>
          <p className="text-2xl font-bold">54</p>
          <p>+40%</p>
        </div>
  
        {/* Center Section */}
        <div className="col-span-2 row-span-4 bg-purple-200 rounded-lg relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Centered Woman"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Overlay Stats */}
          <div className="absolute top-4 left-4 p-2 bg-white rounded">
            <p className="text-pink-500 font-bold">19.46% Engagement</p>
          </div>
        </div>

        {/* Middle Right Section */}
        <div className="col-span-1 row-span-3 bg-gray-800 p-4 rounded-lg">
          <h3>Smart Digital Agency</h3>
          <p>For Your Business</p>
        </div>
  
        {/* Bottom Left Section */}
        <div className="col-span-1 row-span-4 bg-pink-100 text-black p-4 rounded-lg">
          <h3>Font</h3>
          <p>SK-Modernist</p>
          <div className="flex gap-2 mt-2">
            <span className="block w-6 h-6 bg-red-500 rounded-full"></span>
            <span className="block w-6 h-6 bg-gray-500 rounded-full"></span>
          </div>
        </div>
  
        {/* Middle Bottom Section */}
        <div className="col-span-1 row-span-2 bg-gray-500 text-white p-4 rounded-lg">
          <h3>Team of Designers</h3>
          <p>Passionate and Creative</p>
        </div>
  
        {/* Bottom Right Section */}
        <div className="col-span-2 row-span-2 bg-gray-700 text-white p-4 rounded-lg">
          <h3>We Build Future</h3>
          <p>Crafting Meaningful UX/UI Design</p>
        </div>
      </div>
    );
  };
  
  export default BentoGrid;