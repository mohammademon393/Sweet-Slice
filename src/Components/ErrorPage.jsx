import React from 'react';
import { Link } from 'react-router-dom'; // অথবা সাধারণ <a> ট্যাগ ব্যবহার করতে পারেন
import { Home, ArrowLeft, UtensilsCrossed } from 'lucide-react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF5F7] flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center">
        
        {/* Visual 404 Illustration */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[18rem] font-black text-pink-100 leading-none select-none">
            404
          </h1>
          
          {/* Floating Cake with a Bite mark - আপনি এখানে আপনার কেকের ছবি ব্যবহার করবেন */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative group">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce duration-[2000ms]">
                <span className="text-8xl md:text-9xl">🍰</span>
              </div>
              {/* "Bite" mark indicator */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FFF5F7] rounded-full -mr-4 -mt-4 border-none"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 -mt-10 md:-mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! Someone ate the page...
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-md mx-auto">
            The slice you are looking for doesn't exist or has been moved to another platter. 
            Let's get you back to the fresh ones!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-pink-600 transition-all shadow-lg hover:shadow-pink-200"
            >
              <Home size={20} />
              Back to Home
            </p>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-white text-gray-700 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-pink-300 hover:text-pink-500 transition-all"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>
        </div>

        {/* Footer Suggestion */}
        <div className="mt-16 flex items-center justify-center gap-2 text-pink-400 font-medium">
          <UtensilsCrossed size={18} />
          <span>While you're here, why not check our <Link to="/events" className="underline font-bold">Latest Events</Link>?</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;