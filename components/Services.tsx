import React from "react";
import { Gym, Dumbbell, Heart, Users, Calendar, User } from "lucide-react";

const Services = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">We offer a variety of services to help you achieve your fitness goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Dynamic Workout Imagery & Membership CTA */}
          <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b8d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Workout" // Ensure alt text is descriptive
              className="object-cover w-full h-64 md:h-80 transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Dynamic Workouts</h3>
              <p className="text-sm">Explore a range of workouts to keep you motivated.</p>
              <a href="#" className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">Join Now</a>
            </div>
          </div>

          {/* Class Schedule */}          
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="text-blue-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Class Schedule</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Find the perfect class to fit your schedule.</p>
            </div>
            <a href="#" className="inline-block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 self-start">View Schedule</a>
          </div>

          {/* Personal Trainer Profiles */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <User className="text-purple-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Personal Trainers</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Get personalized training from our certified professionals.</p>
            </div>
            <a href="#" className="inline-block mt-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 self-start">Meet Our Trainers</a>
          </div>

          {/* Icon-Only Card: Gym Access */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center">
            <Gym className="text-green-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Gym Access</h3>
            <p className="text-gray-600 text-sm text-center">Enjoy unlimited access to our state-of-the-art facilities.</p>
          </div>

          {/* Icon-Only Card: Fitness Classes */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col items-center justify-center">
            <Dumbbell className="text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fitness Classes</h3>
            <p className="text-gray-600 text-sm text-center">Join our diverse range of fitness classes for all levels.</p>
          </div>

          {/* Membership Tiers Comparison */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Users className="text-yellow-500" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Membership Tiers</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">Compare our membership options and find the perfect fit.</p>
            </div>
            <a href="#" className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 self-start">View Membership Tiers</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
