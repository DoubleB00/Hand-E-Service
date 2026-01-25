import { Percent, Gift, Users } from 'lucide-react';

const discounts = [
  {
    icon: Gift,
    title: 'First-Time Customer',
    discount: '10% off',
    description: 'Welcome bonus for new customers',
  },
  {
    icon: Percent,
    title: 'Second-Time Customer',
    discount: '20% off',
    description: 'Thank you for coming back',
  },
  {
    icon: Users,
    title: 'Referral Discount',
    discount: '15% off',
    description: 'For both you and your referral',
  },
];

export default function Discounts() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Special Discounts
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 text-lg">
            Save more with our exclusive customer rewards
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {discounts.map((discount, index) => {
              const Icon = discount.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-amber-200"
                >
                  <div className="bg-amber-600 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {discount.title}
                    </h3>
                    <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                      {discount.discount}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {discount.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
