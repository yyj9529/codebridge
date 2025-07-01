import React from 'react';
import { Avatar } from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent } from '~/common/components/ui/card';

export function ScenariosMain() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-gray-600 rounded mr-3 flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-lg font-medium text-gray-300">CodeBridge</span>
        </div>

        {/* Welcome Section */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-2">Welcome to the</h1>
          <h1 className="text-4xl font-bold mb-8">TaskFlow AI Team!</h1>

          {/* Product Manager Introduction */}
          <div className="flex items-start mb-8">
            <div className="w-12 h-12 bg-gray-600 rounded-full mr-4 flex items-center justify-center overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d1d5db'%3E%3Cpath fill-rule='evenodd' d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z' clip-rule='evenodd' /%3E%3C/svg%3E" 
                alt="Sarah"
                className="w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="text-gray-400 mr-2">[{" "}</span>
                <span className="text-white">Name</span>
                <span className="text-gray-400 ml-2">)</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Hi Sarah, the Product Manager<br />
                for this project. Our goal is to<br />
                build a great tool to boost<br />
                team productivity.
              </p>
            </div>
          </div>

          {/* Meet Your Core Team */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Meet Your Core Team</h2>
            <div className="flex space-x-8">
              {/* Alex */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d1d5db'%3E%3Cpath fill-rule='evenodd' d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z' clip-rule='evenodd' /%3E%3C/svg%3E" 
                    alt="Alex"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">Alex</div>
                  <div className="text-gray-400 text-sm">Senior<br />Backend Dev</div>
                </div>
              </div>

              {/* David */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-3 flex items-center justify-center overflow-hidden">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d1d5db'%3E%3Cpath fill-rule='evenodd' d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z' clip-rule='evenodd' /%3E%3C/svg%3E" 
                    alt="David"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold">David</div>
                  <div className="text-gray-400 text-sm">Frontend<br />Lead</div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Work */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We work in 2-week sprints and<br />
              manage all our tasks on the Kanban<br />
              board you see on the right.
            </p>
          </div>

          {/* Get Started Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
            Let's Get Started
          </Button>
        </div>
      </div>

      {/* Right Side - Kanban Board */}
      <div className="w-96 bg-gray-800 border-l border-gray-700 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-300 mb-1">TaskFlow AI Project Board</h3>
        </div>

        <div className="flex space-x-4">
          {/* To Do Column */}
          <div className="flex-1">
            <div className="bg-gray-700 rounded-lg p-3 mb-3">
              <h4 className="text-sm font-medium text-gray-300 mb-2">To Do</h4>
              <div className="space-y-2">
                <Card className="bg-gray-600 border-gray-500 p-3">
                  <p className="text-sm text-gray-200">Setup project structure</p>
                </Card>
                <Card className="bg-gray-600 border-gray-500 p-3">
                  <p className="text-sm text-gray-200">Design database schema</p>
                </Card>
                <Card className="bg-gray-600 border-gray-500 p-3">
                  <p className="text-sm text-gray-200">Create API endpoints</p>
                </Card>
              </div>
            </div>
          </div>

          {/* In Progress Column */}
          <div className="flex-1">
            <div className="bg-gray-700 rounded-lg p-3">
              <h4 className="text-sm font-medium text-gray-300 mb-2">In Progress</h4>
              <div className="space-y-2">
                <Card className="bg-blue-900 border-blue-700 p-3">
                  <p className="text-sm text-gray-200">User authentication</p>
                </Card>
                <Card className="bg-blue-900 border-blue-700 p-3">
                  <p className="text-sm text-gray-200">Dashboard UI</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScenariosMain; 