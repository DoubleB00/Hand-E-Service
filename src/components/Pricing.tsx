import { Truck, Package } from 'lucide-react';

const loadSizes = [
  { size: 'Minimum pickup', price: '$50–$75' },
  { size: 'Quarter load', price: '$100–$150' },
  { size: 'Half load', price: '$200–$250' },
  { size: '3/4 load', price: '$300–$350' },
  { size: 'Full load', price: '$400–$600' },
];

const itemPickups = [
  { size: 'Small items', price: '$50 minimum' },
  { size: 'Medium items', price: '$75 minimum' },
  { size: 'Large items', price: '$100 minimum' },
  { size: 'Heavy items', price: '$200 minimum' },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 text-lg">
            Transparent, competitive rates with no hidden fees
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-blue-700 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center">
                  <Truck className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Load Size Pricing
                </h3>
              </div>
              <div className="space-y-4">
                {loadSizes.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-lg border border-blue-100"
                  >
                    <span className="text-gray-900 font-semibold text-base md:text-lg">
                      {item.size}
                    </span>
                    <span className="text-blue-700 font-bold text-lg md:text-xl">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-amber-200">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-amber-600 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Item Pickup Pricing
                </h3>
              </div>
              <div className="space-y-4">
                {itemPickups.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-lg border border-amber-100"
                  >
                    <span className="text-gray-900 font-semibold text-base md:text-lg">
                      {item.size}
                    </span>
                    <span className="text-amber-600 font-bold text-lg md:text-xl">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-base md:text-lg">
              Call or text for a free estimate: <span className="font-bold text-blue-700 text-xl">321-291-9480</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
