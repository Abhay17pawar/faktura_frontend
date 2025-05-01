import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.123fakturera.se/public/wallpapers/sverige43.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Diamond Icon for screens > 1268px */}
        <div className="absolute top-12 left-8 sm:left-40 z-20 max-[1268px]:hidden">
          <img
            src="https://storage.123fakturera.se/public/icons/diamond.png"
            alt="Diamond Icon"
            style={{ height: "2rem" }}
          />
        </div>

        {/* Hamburger + Language for ≤1268px */}
        <div className="w-full flex justify-between items-center px-6 pt-12 max-[1268px]:flex hidden z-20">
          <img
            src="https://img.icons8.com/ios-filled/50/ffffff/menu--v1.png"
            alt="Menu Icon"
            className="w-6 h-6"
          />
          <div className="flex items-center gap-2">
            <span className="text-white font-medium hover:underline">English</span>
            <img
              src="https://storage.123fakturere.no/public/flags/SE.png"
              alt="Swedish Flag"
              width={24}
              height={16}
              className="w-6 h-4"
            />
          </div>
        </div>

        {/* Navigation (hidden on small screens) */}
        <nav className="w-full pt-12 pb-6 flex justify-center items-center ml-24 sm:ml-36 md:ml-56 lg:ml-68 px-4 md:px-0 max-[1268px]:hidden">
          <div className="flex flex-wrap justify-end md:justify-end gap-6 md:gap-10 text-white font-medium text-lg">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Order
            </a>
            <a href="#" className="hover:underline">
              Our Customers
            </a>
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <div className="flex items-center gap-2">
              <span className="hover:underline">English</span>
              <img
                src="https://storage.123fakturere.no/public/flags/SE.png"
                alt="Swedish Flag"
                width={24}
                height={16}
                className="w-6 h-4"
              />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center px-4 md:px-8 pt-4 pb-16 mt-0 max-[1268px]:mt-10">
          <h2 className="text-3xl font-bold text-white mb-6">Terms</h2>

          {/* Close Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-10 rounded-full mb-8 transition-colors">
            Close and Go Back
          </button>

          {/* Terms Content */}
          <div className="bg-white rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-gray-700 text-center leading-relaxed">
            <p className="mb-6">
              <span className="font-bold">BY</span> clicking Invoice Now, you choose to register according to the
              information that you have typed in and the text on the registration page and the terms here, and you at
              the same time accept the terms here.
            </p>

            <p className="mb-6">You can use the program FOR FREE for 14 days.</p>

            <p className="mb-6">
              123 Fakturera is so easy and self-explanatory that the chance that you will need support is minimal, but
              if you should need support, we are here for you, with our office manned for the most part of the day.
              After the trial period, the subscription continues and costs SEK 99 excluding VAT per month, which is
              billed annually. If you do not want to keep the program, just cancel the trial period by giving notice
              before 14 days from registration.
            </p>

            <p className="mb-6">
              You have of course the right to terminate the use of the program without any costs, by giving us notice
              per email before 14 days from registration, that you do not want to continue with the program, and you
              then of course do not pay anything.
            </p>

            <p className="mb-6">
              If we do not receive such a notice from you before 14 days from registration, then the order, for natural
              reasons, cannot be changed. With registration it is meant the date and time when you did choose to press
              the button Invoice Now.
            </p>

            <p>Billing is for one year at a time.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
