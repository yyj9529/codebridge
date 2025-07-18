import { type MetaFunction } from 'react-router';
import { Button } from '../components/ui/button';
import { ChevronRightIcon, UserIcon, CodeIcon, TrophyIcon } from 'lucide-react';
import type { Route } from '../../../.react-router/types/app/common/pages/+types/home-page';
import { makeSSRClient } from '~/supa-client';


export const loader = async({request}:Route.LoaderArgs)=>{
  const {client,headers} = makeSSRClient(request);
  const {data,error} = await client.from("user_available_tasks").select("*");
  
  return null;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Home | CodeBridge" }
  ];
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-900 to-yellow-900">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-8 py-20 text-center relative">
        {/* Animated dots background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-40 left-40 w-5 h-5 bg-pink-400 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-60 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-60 right-20 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-80 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <line x1="80" y1="80" x2="200" y2="160" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7" />
            <line x1="200" y1="160" x2="400" y2="240" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7" />
            <line x1="400" y1="240" x2="600" y2="180" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7" />
            <line x1="600" y1="180" x2="800" y2="280" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.7" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Empower Your Tech Journey
          </h1>
          <div className="text-xl text-gray-200 mb-8 space-y-2">
            <p>Bridge the gap from aspiring developer to industry leader with real-world</p>
            <p>workflow simulations and personalized guidance.</p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              Learn More <ChevronRightIcon className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features of CodeBridge</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<UserIcon className="w-12 h-12 text-pink-400" />}
              title="Personalized Learning Paths" 
              description="Tailored curriculum based on your role, tech stack, and experience level, ensuring relevant and efficient skill development." 
            />
            <FeatureCard 
              icon={<CodeIcon className="w-12 h-12 text-orange-400" />}
              title="Interactive Scenario Simulations" 
              description="Practice real-world coding challenges in a sandboxed environment, gaining hands-on experience without risk." 
            />
            <FeatureCard 
              icon={<TrophyIcon className="w-12 h-12 text-blue-400" />}
              title="Real-world Skill Development" 
              description="Gain practical, industry-aligned experience that translates directly to job readiness and career advancement." 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition-colors duration-300">
      <div className="mb-6 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-400 text-center leading-relaxed">{description}</p>
    </div>
  );
} 