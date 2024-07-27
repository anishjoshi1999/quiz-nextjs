// pages/about.js
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to our about page. Here you can learn more about our company
            and our mission.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We strive to deliver exceptional value and service. Our team is
            dedicated to providing the best experience for our customers.
          </p>
          <div className="mt-6">
            <Link href="/" passHref>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
