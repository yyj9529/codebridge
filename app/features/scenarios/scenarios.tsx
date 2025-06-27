import { Button } from '../../common/components/ui/button';

export default function ScenariosPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-dark p-4">
        <h2 className="text-xl font-bold mb-4">Scenarios</h2>
        <ul className="space-y-2">
          <li className="text-foreground">Dashboard</li>
          <li className="text-foreground">Scenarios</li>
          <li className="text-foreground">Profile</li>
          <li className="text-foreground">Glossary</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-light p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Implement Factorial Function</h2>
          <Button>Submit</Button>
        </div>
        <div className="flex">
          {/* Task List */}
          <div className="w-1/3 bg-card p-4 mr-4">
            <h3 className="font-bold mb-2">Tasks</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Implement the base case for n = 0.</li>
              <li>Implement the recursive step for n {'>'} 0.</li>
              <li>Ensure the function returns the correct factorial value.</li>
            </ul>
          </div>

          {/* Code Editor */}
          <div className="flex-1 bg-dark p-4">
            <h3 className="font-bold mb-2">src/index.ts</h3>
            <pre className="bg-black text-white p-2 rounded">
              {`function calculateFactorial(n: number): number {
  // Your code here
  if (n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

// Example usage:
const result = calculateFactorial(5);
console.log(result); // Expected: 120
              `}
            </pre>
          </div>

          {/* AI Assistant */}
          <div className="w-1/4 bg-card p-4 ml-4">
            <h3 className="font-bold mb-2">AI Assistant</h3>
            <p>Welcome! I'm your AI assistant. How can I help you with this scenario?</p>
            <Button className="mt-4">What's the best way to test this factorial function?</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 