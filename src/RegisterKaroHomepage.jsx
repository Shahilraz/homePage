import React, { useState } from "react";

const RegisterKaro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-blue-800 text-white p-3 flex justify-end text-sm space-x-4">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>www.registerkaro.in</span>
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>+918447746183</span>
        </div>
        <div className="hidden md:flex space-x-3">
          <a href="#" className="hover:text-gray-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-200">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="src\assets\imagelogo.png"
                alt="RegisterKaro Logo"
                className="h-12"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-800 hover:text-orange-500">
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-800 hover:text-orange-500 flex items-center">
                  Our Services
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-gray-800 hover:text-orange-500">
                Blog
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-500">
                Contact Us
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-500">
                About us
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <a
                href="#"
                className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Talk An Expert
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-3">
              <a
                href="#"
                className="block text-gray-800 hover:text-orange-500 py-2"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-orange-500 py-2"
              >
                Our Services
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-orange-500 py-2"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-orange-500 py-2"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-gray-800 hover:text-orange-500 py-2"
              >
                About us
              </a>
              <a
                href="#"
                className="block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md text-center transition duration-300"
              >
                Talk An Expert
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-8">
              {/* Service Chips */}
              <div className="container mx-right px-4 py-2 hidden md:block">
                <div className="absolute right-8 space-y-7">
                  <div className="bg-white shadow rounded-lg py-2 px-4 w-48 text-center hover:shadow-md transition duration-300">
                    <span className="font-medium">Annual Compliance</span>
                  </div>
                  <div className="bg-white shadow rounded-lg py-2 px-4 w-48 text-center hover:shadow-md transition duration-300">
                    <span className="font-medium">Payroll Services</span>
                  </div>
                  <div className="bg-white shadow rounded-lg py-2 px-4 w-48 text-center hover:shadow-md transition duration-300">
                    <span className="font-medium">Company Formation</span>
                  </div>
                  <div className="bg-white shadow rounded-lg py-2 px-4 w-48 text-center hover:shadow-md transition duration-300">
                    <span className="font-medium">Annual Compliance</span>
                  </div>
                </div>
              </div>
              {/* Rating */}
              <div className="mb-6 flex items-center">
                <span className="text-yellow-500 mr-2">★</span>
                <span className="font-semibold">Google Rating</span>
                <div className="ml-2 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Main heading */}

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your trusted partner
                <br />
                for compliance business needs
              </h1>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>

              {/* Description */}
              <p className="text-lg text-gray-700 mb-6">
                An online business compliance platform that helps entrepreneurs
                and other individuals with various,{" "}
                <span className="font-semibold">
                  registrations, tax filings
                </span>
                , and other <span className="font-semibold">legal matters</span>
                .
              </p>

              {/* Stats */}

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-orange-500">
                      4.5+
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">Customer Rating</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-orange-500">
                      20,000+
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">Clients</span>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </div>
                    <span className="text-xl font-bold text-orange-500">
                      99.8%
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    Financial Stability
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded text-center transition duration-300"
                >
                  Talk An Expert
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center text-gray-800 hover:text-orange-500 font-medium py-3 px-6 bg-white rounded border border-gray-200 transition duration-300"
                >
                  <svg
                    className="w-5 h-5 text-orange-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  See how it works
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <img
                src="src\assets\image.png"
                alt="RegisterKaro Business Compliance"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="bg-white py-12 mt-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Trusted By Over 100+ Startups and freelance business
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <img
                src="src\assets\oracle.png"
                alt="Oracle"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="src\assets\Morpheus.png"
                alt="Morpheus"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="src\assets\Morpheus.png"
                alt="Morpheus"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="src\assets\Samsung.png"
                alt="Samsung"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="src\assets\Monday.png"
                alt="Monday.com"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="src\assets\Segment.png"
                alt="Segment"
                className="h-4 opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterKaro;
