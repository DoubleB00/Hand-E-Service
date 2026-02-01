import { Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Request Your Free Estimate
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12">
            Get in touch today for a no-obligation quote. We're ready to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:3212919480"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-700 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors shadow-lg"
            >
              <Phone className="w-7 h-7" />
              Call Now
            </a>
            <a
              href="sms:3212919480"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-600 text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-amber-700 transition-colors shadow-lg"
            >
              <MessageSquare className="w-7 h-7" />
              Text Us
            </a>
          </div>
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            321-291-9480
          </p>
          <div className="border-t border-gray-200 pt-10">
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Happy with our service? We'd really appreciate your feedback!
            </p>
            <a
              href="https://g.page/r/CW_Q5YQRWK6UEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg md:text-xl transition-colors shadow-lg"
            >
              ⭐ Leave Us a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
