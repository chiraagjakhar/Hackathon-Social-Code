import React, { useState } from 'react';
import { Phone, Flame, Shield, Building2, Home, FileText, User } from 'lucide-react';

export default function EmergencyApp() {
  const [activeTab, setActiveTab] = useState('home');
  
  const handleEmergencyCall = (service) => {
    alert(`Calling ${service}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 pb-24">
      <div className="p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Emergency Services</h1>
          <p className="text-gray-600">Quick access to help when you need it</p>
        </div>

        {/* Emergency Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-green-600 rounded-full mr-3"></div>
            <h2 className="text-xl font-bold text-gray-800">Emergency</h2>
          </div>
          
          <div className="space-y-3">
            {/* Hospital Button */}
            <button
              onClick={() => handleEmergencyCall('Hospital')}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
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
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
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
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
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
            className="w-full bg-green-400 hover:bg-green-500 text-white rounded-xl p-4 flex items-center justify-between transition-all duration-200 transform hover:scale-105 shadow-md"
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

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-md mx-auto flex items-center justify-around px-6 py-3">
          {/* Past Complaints */}
          <button
            onClick={() => setActiveTab('complaints')}
            className={`flex flex-col items-center justify-center transition-all duration-200 ${
              activeTab === 'complaints' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <FileText className={`w-6 h-6 mb-1 ${activeTab === 'complaints' ? 'scale-110' : ''}`} />
            <span className="text-xs font-medium">Complaints</span>
          </button>

          {/* Home */}
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center transition-all duration-200 ${
              activeTab === 'home' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <div className={`${activeTab === 'home' ? 'bg-green-600' : 'bg-gray-400'} rounded-full p-3 mb-1 transition-all duration-200 ${activeTab === 'home' ? 'scale-110' : ''}`}>
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-medium">Home</span>
          </button>

          {/* Profile */}
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center justify-center transition-all duration-200 ${
              activeTab === 'profile' ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            <User className={`w-6 h-6 mb-1 ${activeTab === 'profile' ? 'scale-110' : ''}`} />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
