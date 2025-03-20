import React from 'react';

function DoctorSection() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
    },
    {
      name: "Dr. Emily Williams",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Meet Our Experts</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Our team of experienced doctors is here to provide you with the best medical care
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {doctors.map((doctor, index) => (
            <div key={index} className="w-full md:w-4/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt={doctor.name}
                  src={doctor.image}
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">{doctor.name}</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    {doctor.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorSection;