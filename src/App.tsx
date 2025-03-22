import React, { useState } from 'react';
import { ChevronRight, GaugeCircle, Car, Zap, Wind, Menu, X, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg"
              alt="Audi Logo"
              className="h-8 w-auto"
            />
            <div className="text-2xl font-bold">AUDI R8</div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-black lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
              <li><a href="#" className="hover:text-gray-300">Overview</a></li>
              <li><a href="#performance" className="hover:text-gray-300">Performance</a></li>
              <li><a href="#gallery" className="hover:text-gray-300">Gallery</a></li>
              <li><a href="#specs" className="hover:text-gray-300">Specifications</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://i.pinimg.com/736x/78/09/a2/7809a25d66155163dd8acb4bc06839a7.jpg"
            alt="Audi R8"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-4">Audi R8</h1>
            <p className="text-xl mb-8">Pure Performance. Absolute Precision.</p>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-black px-8 py-3 rounded-full flex items-center group"
            >
              Discover More
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <GaugeCircle className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-bold mb-2">3.2s</h3>
              <p className="text-gray-400">0-60 mph</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Car className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-bold mb-2">5.2L V10</h3>
              <p className="text-gray-400">Engine</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Zap className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-bold mb-2">602 HP</h3>
              <p className="text-gray-400">Power Output</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <Wind className="mx-auto mb-4 w-12 h-12" />
              <h3 className="text-2xl font-bold mb-2">205 mph</h3>
              <p className="text-gray-400">Top Speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="https://i.pinimg.com/736x/b6/09/c2/b609c20adca9c040842b48c69d1dc955.jpg"
              alt="Audi R8 Blue"
              className="w-full h-80 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://i.pinimg.com/736x/cd/8a/07/cd8a075b6f14260bcfae81fa27e5a5b9.jpg"
              alt="Audi R8 Black"
              className="w-full h-80 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="	https://i.pinimg.com/736x/cd/74/2b/cd742b37b7227f2850ef48ab6fcf37c6.jpg"
              alt="Audi R8 Red"
              className="w-full h-80 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://i.pinimg.com/736x/b9/e7/8e/b9e78ec875e83c799786816faa42d660.jpg"
              alt="Audi R8 Silver"
              className="w-full h-80 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="	https://i.pinimg.com/736x/36/5c/08/365c08a15b8b94ac98b16400a31bf675.jpg"
              alt="Audi R8 Green"
              className="w-full h-80 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <img 
              src="https://i.pinimg.com/736x/59/ad/cf/59adcf779d08183912022b43a67119c4.jpg"
              alt="Audi R8 Yellow"
              className="w-full h-80 object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Engine Type</span>
                <span className="font-semibold">5.2L FSI V10</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Transmission</span>
                <span className="font-semibold">7-speed S tronic</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Drive Type</span>
                <span className="font-semibold">quattro AWD</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Maximum Torque</span>
                <span className="font-semibold">413 lb-ft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="text-gray-400">© 2024 Audi R8. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <p>Made by Lazwi</p>
            <a 
              href="https://www.instagram.com/_louay_k/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Discover More Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80" onClick={() => setShowModal(false)} />
          <div className="relative bg-zinc-900 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6">Audi R8: Unparalleled Performance</h2>
              
              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold mb-4">Performance Variants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img 
                      src="https://i.pinimg.com/736x/56/99/9d/56999d32225032e8252d43f30347afb7.jpg"
                      alt="Audi R8 Performance"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="space-y-4">
                      <div className="bg-black/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">R8 V10 Performance Quattro</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          <li>570 hp output</li>
                          <li>0-100 km/h in 3.5 seconds</li>
                          <li>Top speed: 324 km/h</li>
                        </ul>
                      </div>
                      <div className="bg-black/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">R8 V10 Plus</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          <li>620 hp output</li>
                          <li>0-100 km/h in 3.2 seconds</li>
                          <li>Top speed: 331 km/h</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4">Exterior Design</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img 
                      src="https://i.pinimg.com/736x/80/a7/ce/80a7cee8f5587050674688d301821277.jpg"
                      alt="Audi R8 Design"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <ul className="list-disc list-inside text-gray-300">
                      <li>LED and optional laser headlights</li>
                      <li>Carbon-fiber-reinforced polymer (CFRP) body</li>
                      <li>Striking honeycomb grille</li>
                      <li>Aerodynamic design for optimal performance</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4">Interior Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-gray-300">
                      <li>12.3-inch Audi Virtual Cockpit</li>
                      <li>Fine Nappa leather upholstery</li>
                      <li>Carbon-fiber inlays</li>
                      <li>Bang & Olufsen premium audio system</li>
                      <li>Sport seats with heating function</li>
                    </ul>
                    <img 
                      src="https://i.pinimg.com/736x/8c/b3/76/8cb37647ee74160967335303e772980c.jpg"
                      alt="Audi R8 Interior"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4">Technology</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img 
                      src="https://i.pinimg.com/736x/3c/5e/7e/3c5e7e9a923c05ef75de5b3026e68b9a.jpg"
                      alt="Audi R8 Technology"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <ul className="list-disc list-inside text-gray-300">
                      <li>Audi Drive Select with multiple driving modes</li>
                      <li>MMI navigation with touch response</li>
                      <li>Apple CarPlay and Android Auto integration</li>
                      <li>Advanced driver-assistance systems</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-black/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Exterior Colors</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>Suzuka Gray</li>
                        <li>Mythos Black</li>
                        <li>Vegas Yellow</li>
                        <li>Ara Blue</li>
                      </ul>
                    </div>
                    <div className="bg-black/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Wheel Options</h4>
                      <ul className="list-disc list-inside text-gray-300">
                        <li>19-inch 5-spoke design</li>
                        <li>20-inch 10-spoke Y design</li>
                        <li>20-inch 5-double-spoke design</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;