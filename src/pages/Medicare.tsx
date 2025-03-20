import React, { useState } from 'react';
import { Upload, Search, Pill, Stethoscope, ChevronFirst as FirstAid } from 'lucide-react';

function Medicare() {
  const [prescription, setPrescription] = useState<File | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'Prescription Drugs', icon: <Pill className="w-6 h-6" />, color: 'from-purple-500 to-indigo-600' },
    { name: 'Medical Supplies', icon: <FirstAid className="w-6 h-6" />, color: 'from-rose-500 to-pink-600' },
    { name: 'Healthcare Equipment', icon: <Stethoscope className="w-6 h-6" />, color: 'from-blue-500 to-cyan-600' },
  ];

  const popularMedicines = [
    { name: 'Paracetamol', type: 'Pain Relief', price: '$5.99' },
    { name: 'Aspirin', type: 'Anti-inflammatory', price: '$4.99' },
    { name: 'Ibuprofen', type: 'Pain Relief', price: '$6.99' },
    { name: 'Amoxicillin', type: 'Antibiotic', price: '$12.99' },
  ];

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Background with overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-rose-900/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Categories Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 backdrop-blur-lg bg-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-90 transition-all duration-300 group-hover:opacity-100`}></div>
                <div className="relative p-8">
                  <div className="text-white mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80">Browse our selection of quality healthcare products</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prescription Upload Section */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-xl p-8 mb-8 transition-all duration-300 hover:shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Upload Prescription
            </h2>
            <div className="border-3 border-dashed border-white/30 rounded-2xl p-12 text-center transition-all duration-300 hover:border-white/50 group">
              <Upload className="mx-auto h-16 w-16 text-white/70 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
              <p className="mt-4 text-white/80 text-lg">Drag and drop your prescription here, or</p>
              <label className="mt-4 inline-block">
                <span className="bg-white/20 text-white px-6 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-105 inline-block backdrop-blur-sm">
                  Browse Files
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={(e) => setPrescription(e.target.files?.[0] || null)}
                />
              </label>
              {prescription && (
                <div className="mt-6 text-emerald-300 bg-emerald-900/30 p-4 rounded-lg inline-block backdrop-blur-sm">
                  <p className="font-medium">File selected: {prescription.name}</p>
                </div>
              )}
            </div>
          </div>

          {/* Medicine Search Section */}
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Search Medicines
            </h2>
            <div className="relative mb-12">
              <input
                type="text"
                className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:border-white/40 transition-all duration-300 text-lg focus:ring-4 focus:ring-white/10 outline-none text-white placeholder-white/50"
                placeholder="Search for medicines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 h-6 w-6 text-white/50" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Popular Medicines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {popularMedicines.map((medicine, index) => (
                  <div
                    key={index}
                    className="group p-6 backdrop-blur-lg bg-white/10 rounded-2xl transition-all duration-300 hover:bg-white/20 border border-white/20 hover:border-white/30"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-white transition-colors duration-300">
                          {medicine.name}
                        </h4>
                        <p className="text-white/70 mt-1">{medicine.type}</p>
                      </div>
                      <span className="text-lg font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                        {medicine.price}
                      </span>
                    </div>
                    <button className="mt-4 w-full bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg transform transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medicare;