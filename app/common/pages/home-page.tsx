import type { MetaFunction } from 'react-router';
import { Button } from '../components/ui/button';
import { ChevronRightIcon } from 'lucide-react';

export const meta: MetaFunction=()=>{
  return[
    {title : "Home | Codebridge"}
  ]
}

export default function HomePage() {
  return (
   <div className="px-20 space-y-40">
     <div className="flex justify-center items-center">
      <div>
        <h2 className="text-5xl font-bold leading-tight tracking-tight mb-4">Empower Your Tech Journey</h2>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl font-light text-foreground">Bridge the gap from developer to industry leader with real-world.</p>
          <p className="text-xl font-light text-foreground">workflow simulations and personalized guidance.</p>
          <div className="flex gap-4 mt-8">
            <Button>
              Start free Trial
            </Button>
            <Button variant="secondary">
              Learn more<ChevronRightIcon />
            </Button>
            </div>
          </div>
         
        </div>
      </div> 
      <div className="flex justify-center items-center">
       
        <FeaturesSection />
      </div>
        
    </div>
   
  );
}

function FeaturesSection() {
  return (
    <div className="py-20 bg-dark">
      <h3 className="text-3xl font-bold text-center mb-10">Key Features of CodeBridge</h3>
      <div className="flex justify-around">
        <FeatureCard title="Personalized Learning Paths" description="Tailored curriculum based on your role, tech stack, and experience level, ensuring relevant and efficient skill development." />
        <FeatureCard title="Interactive Scenario Simulations" description="Practice real-world coding challenges in a sandboxed environment, gaining hands-on experience without risk." />
        <FeatureCard title="Real-world Skill Development" description="Gain practical, industry-aligned experience that translates directly to job readiness and career advancement." />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h4 className="font-bold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
} 