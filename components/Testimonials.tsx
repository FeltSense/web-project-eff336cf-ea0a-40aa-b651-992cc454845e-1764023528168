
import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img src="https://via.placeholder.com/64" alt="Client Avatar" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="text-yellow-500 mb-2">
              ★★★★★
            </div>
            <p className="italic text-gray-700 mb-4">"Fitness First has completely transformed my life. I feel stronger, healthier, and more confident than ever before!"</p>
            <p className="font-bold text-gray-800">Jane Doe</p>
            <p className="text-gray-600">Software Engineer</p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img src="https://via.placeholder.com/64" alt="Client Avatar" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="text-yellow-500 mb-2">
              ★★★★★
            </div>
            <p className="italic text-gray-700 mb-4">"The trainers at Fitness First are incredibly supportive and knowledgeable. They helped me achieve my fitness goals faster than I ever thought possible."</p>
            <p className="font-bold text-gray-800">John Smith</p>
            <p className="text-gray-600">Marketing Manager</p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <img src="https://via.placeholder.com/64" alt="Client Avatar" className="w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="text-yellow-500 mb-2">
              ★★★★★
            </div>
            <p className="italic text-gray-700 mb-4">"I love the variety of classes offered at Fitness First. There's always something new and challenging to try, which keeps me motivated."</p>
            <p className="font-bold text-gray-800">Emily Brown</p>
            <p className="text-gray-600">Teacher</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
