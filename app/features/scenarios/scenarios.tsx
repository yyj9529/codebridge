import { useState } from "react";
import { Button } from "~/common/components/ui/button";
import { Card } from "~/common/components/ui/card";
import { Textarea } from "~/common/components/ui/textarea";
import { CheckIcon, PlayIcon, SendIcon, BotIcon, UserIcon, FolderIcon, FileIcon } from "lucide-react";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export default function ScenariosPage() {
  const [selectedFile, setSelectedFile] = useState("src/index.ts");
  const [code, setCode] = useState(`function calculateFactorial(n: number): number {
  // Your code here
  if (n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

// Example usage:
const result = calculateFactorial(5);
console.log(result); // Expected: 120`);
  
  const [chatMessage, setChatMessage] = useState("");
  const [progress] = useState(60);

  const tasks: Task[] = [
    { id: "1", title: "Implement the base case for n = 0.", completed: true },
    { id: "2", title: "Implement the recursive step for n > 0.", completed: false },
    { id: "3", title: "Ensure the function returns the correct factorial value.", completed: false }
  ];

  const files = [
    { name: "src/index.ts", type: "file", active: true },
    { name: "src/utils.ts", type: "file", active: false },
    { name: "tests/factorial.test.ts", type: "file", active: false },
    { name: "node_modules/", type: "folder", active: false }
  ];

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      // Handle sending message to AI assistant
      setChatMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold mb-2">Implement Factorial Function</h2>
          <p className="text-sm text-gray-400">
            Your task is to complete the calculateFactorial function in TypeScript. This function should 
            recursively calculate the factorial of a given non-negative integer n. Remember that the factorial 
            of 0 is 1.
          </p>
        </div>

        {/* Tasks */}
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-sm font-medium mb-3 flex items-center">
            <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
            Tasks
          </h3>
          <div className="space-y-2">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-2">
                <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center ${
                  task.completed ? 'bg-green-500 border-green-500' : 'border-gray-500'
                }`}>
                  {task.completed && <CheckIcon className="w-3 h-3 text-white" />}
                </div>
                <span className={`text-sm ${task.completed ? 'text-gray-400 line-through' : 'text-gray-300'}`}>
                  {task.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Files */}
        <div className="p-4 flex-1">
          <h3 className="text-sm font-medium mb-3 flex items-center">
            <FolderIcon className="w-4 h-4 mr-2" />
            Files
          </h3>
          <div className="space-y-1">
            {files.map((file, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-gray-700 ${
                  file.active ? 'bg-gray-700' : ''
                }`}
                onClick={() => setSelectedFile(file.name)}
              >
                {file.type === 'folder' ? (
                  <FolderIcon className="w-4 h-4 text-blue-400" />
                ) : (
                  <FileIcon className="w-4 h-4 text-gray-400" />
                )}
                <span className="text-sm">{file.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress:</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-12 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">{selectedFile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" className="text-xs">
              Save
            </Button>
            <Button size="sm" className="text-xs">
              <PlayIcon className="w-3 h-3 mr-1" />
              Run
            </Button>
            <Button size="sm" className="text-xs bg-blue-600 hover:bg-blue-700">
              Submit
            </Button>
          </div>
        </div>

        {/* Code Editor */}
        <div className="flex-1 p-4">
          <div className="h-full bg-gray-900 border border-gray-700 rounded">
            <div className="p-4 h-full">
              <pre className="text-sm text-gray-300 font-mono leading-relaxed">
                <div className="flex">
                  <div className="w-8 text-gray-500 select-none">
                    {code.split('\n').map((_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  <div className="flex-1 pl-4">
                    <Textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-full bg-transparent border-none resize-none text-gray-300 font-mono text-sm leading-relaxed focus:outline-none"
                      style={{ minHeight: '400px' }}
                    />
                  </div>
                </div>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - AI Assistant */}
      <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center">
          <BotIcon className="w-5 h-5 mr-2 text-blue-400" />
          <h3 className="font-medium">AI Assistant</h3>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <BotIcon className="w-6 h-6 text-blue-400 mt-1" />
              <div className="flex-1">
                <p className="text-sm text-gray-300 mb-2">
                  Welcome! I'm your AI assistant. How can I help you with this scenario?
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2">
              <UserIcon className="w-6 h-6 text-green-400 mt-1" />
              <div className="flex-1">
                <p className="text-sm text-gray-300 mb-2">
                  What's the best way to test this factorial function?
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <BotIcon className="w-6 h-6 text-blue-400 mt-1" />
              <div className="flex-1 bg-gray-700 rounded-lg p-3">
                <p className="text-sm text-gray-300">
                  You could use a few test cases: a base case (n=0 or n=1), a small positive integer 
                  (n=5), and potentially edge cases like negative numbers (though factorials are 
                  typically defined for non-negative integers).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex space-x-2">
            <Textarea
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 resize-none"
              rows={2}
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="self-end"
              disabled={!chatMessage.trim()}
            >
              <SendIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
