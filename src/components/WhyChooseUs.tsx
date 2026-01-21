import { Clock, DollarSign, MapPin, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Reliable & On-Time',
    description: 'We respect your time and always arrive when scheduled.',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Transparent, competitive rates with no hidden fees.',
  },
  {
    icon: MapPin,
    title: 'Locally Owned & Operated',
    description: 'Proud to serve our Brevard County community.',
  },
  {
    icon: ThumbsUp,
    title: 'Friendly, Professional Service',
    description: 'Courteous team dedicated to exceeding your expectations.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-blue-100 mb-12 md:mb-16 text-lg">
            Your trusted partner in junk removal and moving
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-600 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
