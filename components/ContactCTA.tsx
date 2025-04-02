import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-skynex-blue to-blue-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Connect with our team to discuss how SKYNEX's data-driven tools and AI solutions
            can help your business make smarter decisions and achieve greater success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-md transition-colors text-lg">
              Contact Us
            </Link>
            <Link href="/tools" className="bg-transparent hover:bg-blue-600 text-white font-bold py-3 px-8 border border-white rounded-md transition-colors text-lg">
              Explore Our Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}