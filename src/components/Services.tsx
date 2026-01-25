import { Check } from 'lucide-react';

const services = [
  'Junk removal',
  'Local moving',
  'Furniture delivery',
  'Furniture assembly',
  'Reorganizing',
  'Heavy lifting',
  'Deep cleaning',
  'Move-in / move-out cleaning',
  'Kitchen degreasing',
  'Estate cleanouts',
  'Apartment cleanouts',
  'House cleanouts',
  'Yard debris pickup',
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 text-lg">
            Professional solutions for all your junk removal and moving needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-white p-4 md:p-5 rounded-lg border border-blue-100 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-700 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-900 text-base md:text-lg font-medium">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
