import React from 'react';
import { Mic, BarChart2, Brain, Clock, Shield, Share2 } from 'lucide-react';

const features = [
  {
    icon: <Mic className="h-6 w-6 text-indigo-600" />,
    title: "Crystal Clear Recording",
    description: "High-quality audio capture with noise reduction and echo cancellation."
  },
  {
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    title: "AI-Powered Analysis",
    description: "Get instant insights on talk ratio, keywords, and sentiment analysis."
  },
  {
    icon: <BarChart2 className="h-6 w-6 text-indigo-600" />,
    title: "Advanced Analytics",
    description: "Track performance metrics and identify improvement opportunities."
  },
  {
    icon: <Clock className="h-6 w-6 text-indigo-600" />,
    title: "Real-time Transcription",
    description: "Convert conversations to text instantly for easy reference."
  },
  {
    icon: <Share2 className="h-6 w-6 text-indigo-600" />,
    title: "Team Collaboration",
    description: "Share insights and best practices across your sales team."
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with privacy regulations."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel in Sales
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you close more deals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-100 hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}