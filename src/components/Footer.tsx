export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/img_5534.jpg"
              alt="HAND E Service Logo"
              className="h-20 md:h-24 w-auto mx-auto"
            />
          </div>
          <p className="text-xl md:text-2xl font-semibold mb-4">
            321-291-9480
          </p>
          <p className="text-gray-400 mb-6">
            Call or text today for a free estimate
          </p>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJeTQFbvsgMQgRxeL8if39Anc&source=g.page.m.ia._&laa=nmx-review-solicitation-ia2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-base md:text-lg transition-colors shadow-lg mb-8"
          >
            ⭐ Leave Us a Google Review
          </a>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} HAND "E" Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
