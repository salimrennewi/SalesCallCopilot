import React from 'react';
import { Mic, BarChart2, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Your Sales Calls into
            <span className="text-indigo-600"> Actionable Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Record, analyze, and improve your sales conversations with AI-powered insights. Make every call count.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              Start Recording Free
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}