import { Trash2, Sofa, Truck, Home, Box } from 'lucide-react';

const services = [
  {
    icon: Trash2,
    title: 'Junk Removal',
    description: 'Quick and efficient removal of unwanted items from your property.',
  },
  {
    icon: Sofa,
    title: 'Furniture & Appliance Removal',
    description: 'Safe disposal of old furniture and appliances of any size.',
  },
  {
    icon: Truck,
    title: 'Residential Moving',
    description: 'Professional moving services to make your relocation stress-free.',
  },
  {
    icon: Home,
    title: 'Light Commercial Moving',
    description: 'Efficient moving solutions for small businesses and offices.',
  },
  {
    icon: Box,
    title: 'Clean-outs',
    description: 'Complete clean-out services for garages, apartments, and storage units.',
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 text-lg">
            Professional solutions for all your junk removal and moving needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-100"
                >
                  <div className="bg-blue-700 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
