import { MapPin } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-blue-700 rounded-full mb-6">
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Area
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold">
            Proudly Serving Brevard County, Florida
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            From coast to coast, we're here to help with all your junk removal and moving needs throughout Brevard County.
          </p>
        </div>
      </div>
    </section>
  );
}
