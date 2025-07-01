import React from 'react';
import { Button } from '~/common/components/ui/button';
import { Card } from '~/common/components/ui/card';
import { CheckIcon, PlayIcon, ClockIcon } from 'lucide-react';

export function SimulationReady() {
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

        {/* Simulation Ready Section */}
        <div className="max-w-2xl">
          <div className="flex items-center mb-4">
            <CheckIcon className="w-8 h-8 text-green-500 mr-3" />
            <h1 className="text-4xl font-bold">Simulation Ready!</h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Your coding environment has been prepared and the team is standing by.
          </p>

          {/* Scenario Details */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Today's Challenge</h2>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">
                Build a Task Management API
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Work with your team to design and implement a RESTful API for task management. 
                You'll need to create endpoints for creating, reading, updating, and deleting tasks, 
                while following best practices for API design and database integration.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>Estimated time: 2-3 hours</span>
              </div>
            </div>
          </div>

          {/* Your Team Status */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Your Team is Ready</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Alex Status */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d1d5db'%3E%3Cpath fill-rule='evenodd' d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z' clip-rule='evenodd' /%3E%3C/svg%3E" 
                    alt="Alex"
                    className="w-full h-full"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                </div>
                <div>
                  <div className="text-white font-semibold">Alex</div>
                  <div className="text-gray-400 text-sm">Senior Backend Dev</div>
                  <div className="text-green-400 text-xs flex items-center">
                    <CheckIcon className="w-3 h-3 mr-1" />
                    Online & Ready
                  </div>
                </div>
              </div>

              {/* David Status */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-600 rounded-full mr-4 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d1d5db'%3E%3Cpath fill-rule='evenodd' d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z' clip-rule='evenodd' /%3E%3C/svg%3E" 
                    alt="David"
                    className="w-full h-full"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full"></div>
                </div>
                <div>
                  <div className="text-white font-semibold">David</div>
                  <div className="text-gray-400 text-sm">Frontend Lead</div>
                  <div className="text-green-400 text-xs flex items-center">
                    <CheckIcon className="w-3 h-3 mr-1" />
                    Online & Ready
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Environment Status */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Environment Status</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">Development server initialized</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">Database connection established</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">Code editor configured</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-300">AI assistant activated</span>
              </div>
            </div>
          </div>

          {/* Start Simulation Button */}
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium text-lg flex items-center">
            <PlayIcon className="w-5 h-5 mr-2" />
            Start Simulation
          </Button>
        </div>
      </div>

      {/* Right Side - Live Activity Feed */}
      <div className="w-96 bg-gray-800 border-l border-gray-700 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-300 mb-1">Live Activity</h3>
          <p className="text-sm text-gray-400">Real-time team updates</p>
        </div>

        <div className="space-y-4">
          {/* Activity Items */}
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-200">Alex joined the session</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-200">David joined the session</p>
              <p className="text-xs text-gray-400">3 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-200">Environment initialized</p>
              <p className="text-xs text-gray-400">5 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-200">Database connected</p>
              <p className="text-xs text-gray-400">6 minutes ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-200">AI assistant loaded</p>
              <p className="text-xs text-gray-400">7 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <h4 className="text-sm font-medium text-gray-300 mb-4">Session Info</h4>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Team Members</span>
              <span className="text-sm text-white">3/3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Environment</span>
              <span className="text-sm text-green-400">Ready</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-400">Difficulty</span>
              <span className="text-sm text-yellow-400">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimulationReady; 