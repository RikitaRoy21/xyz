import React from 'react';
import { Stethoscope, Microscope, Heart, Clock } from 'lucide-react';

function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <ServiceCard
              icon={<Stethoscope className="w-12 h-12" />}
              title="Expert Doctors"
              description="Access to highly qualified and experienced medical professionals"
              color="text-blue-600"
            />
          </div>
          <div className="w-full md:w-4/12 px-4 text-center">
            <ServiceCard
              icon={<Microscope className="w-12 h-12" />}
              title="Lab Services"
              description="State-of-the-art laboratory testing and diagnostic services"
              color="text-emerald-600"
            />
          </div>
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <ServiceCard
              icon={<Clock className="w-12 h-12" />}
              title="24/7 Service"
              description="Round-the-clock emergency care and medical assistance"
              color="text-red-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, color }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
      <div className="px-4 py-5 flex-auto">
        <div className={`text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full ${color.replace('text', 'bg')}`}>
          {icon}
        </div>
        <h6 className="text-xl font-semibold">{title}</h6>
        <p className="mt-2 mb-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Services;