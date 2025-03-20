import React from 'react';
import { Phone } from 'lucide-react';

function EmergencySection() {
  return (
    <section className="relative py-20 bg-rose-600">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-rose-700">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-semibold text-white">24/7 Emergency Service</h3>
              <p className="mt-4 text-lg leading-relaxed text-white">
                Our emergency response team is available 24/7. In case of any medical emergency,
                don't hesitate to contact us immediately.
              </p>
              <div className="mt-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-2xl font-bold text-rose-600">Emergency Hotline</h4>
                  <p className="text-3xl font-bold text-gray-800 mt-2">1-800-HEALTH</p>
                  <p className="text-gray-600 mt-2">Available 24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmergencySection;