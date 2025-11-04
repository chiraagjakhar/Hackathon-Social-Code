import React from 'react';
import { Phone, Flame, Shield, Building2 } from 'lucide-react';

export default function EmergencyApp() {
  const handleEmergencyCall = (service) => {
    alert(`Calling ${service}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Emergency Services</h1>
          <p className="text-gray-600">Quick access to help when you need it</p>
        </div>

        {/* Emergency Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-red-500 rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-gray-800">Emergency</h2>
          </div>
          
          <div className="space-y-3">
            {/* Hospital Button */}
            <button
              onClick={() => handleEmergencyCall('Hospital')}
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold">Hospital</span>
              </div>
              <div className="text-2xl">🏥</div>
            </button>

            {/* Fire Brigade Button */}
            <button
              onClick={() => handleEmergencyCall('Fire Brigade')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-4">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold">Fire Brigade</span>
              </div>
              <div className="text-2xl">🚒</div>
            </button>

            {/* Police Button */}
            <button
              onClick={() => handleEmergencyCall('Police')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-4">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-lg font-semibold">Police</span>
              </div>
              <div className="text-2xl">👮</div>
            </button>
          </div>
        </div>

        {/* Non-Emergency Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-green-500 rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-gray-800">Non-Emergency</h2>
          </div>
          
          {/* Municipality Button */}
          <button
            onClick={() => handleEmergencyCall('Municipality')}
            className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            <div className="flex items-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-2 mr-4">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-lg font-semibold">Municipality</span>
            </div>
            <div className="text-2xl">🏛️</div>
          </button>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>Tap any button to connect with the service</p>
        </div>
      </div>
    </div>
  );
}
