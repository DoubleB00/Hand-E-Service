import { Phone, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-amber-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 md:mb-10">
            <img
              src="/img_5534.jpg"
              alt="HAND E Service - If there's a will there's a way"
              className="w-full max-w-2xl mx-auto h-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Junk Removal & Moving Services You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10">
            Fast, reliable junk removal and moving services for homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:3212919480"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              Call for Free Estimate
            </a>
            <a
              href="sms:3212919480"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-amber-700 transition-colors shadow-lg"
            >
              <MessageSquare className="w-6 h-6" />
              Text Us
            </a>
          </div>
          <p className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">
            321-291-9480
          </p>
        </div>
      </div>
    </section>
  );
}
