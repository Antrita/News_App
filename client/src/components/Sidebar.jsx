import React from 'react';

const Sidebar = () => {
  return (
    <div className="space-y-8 font-poppins">
      {/* Number of the Day Section */}
      <div className="bg-terra-cotta text-white p-6 rounded-lg">
        <h3 className="text-sm font-medium mb-4">NUMBER OF THE DAY</h3>
        <div className="text-3xl font-bold mb-3">$80,000</div>
        <p className="text-sm opacity-90">
          was earned at a charity auction in Paris. The money raised goes to children's hospitals.
        </p>
      </div>

      {/* Installation Stats Section */}
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Installation per million</h3>
        <img 
          src="/api/placeholder/400/200" 
          alt="Installation statistics" 
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-600">
          During the first two days of the exhibition, Pierre was visited by more 
          than 30,000 people. The artist did not expect that his installation would arouse 
          such interest. In two days, he managed to break the record for the number of 
          visitors in that time period.
        </p>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <div className="space-y-3">
          {['Trending Stories', 'Latest Updates', 'Editor\'s Picks', 'Most Viewed'].map((link) => (
            <button
              key={link}
              className="w-full text-left py-2 px-4 rounded-lg hover:bg-light-gray transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;