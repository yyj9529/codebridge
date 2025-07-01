import React from 'react';
import { Button } from '~/common/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/common/components/ui/card';
import { HelpCircleIcon, UserIcon, BookOpenIcon } from 'lucide-react';

export function ScenarioReady() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Sidebar */}
      <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 rounded mr-2 flex items-center justify-center">
              <span className="text-white font-bold text-xs">CB</span>
            </div>
            <span className="text-lg font-semibold text-white">CODEBRIDGE</span>
          </div>
          <HelpCircleIcon className="w-5 h-5 text-gray-400" />
        </div>

        {/* My Current Task */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">My Current Task</h2>
          <Card className="bg-gray-700 border-gray-600">
            <CardContent className="p-4">
              <div className="text-sm text-blue-400 font-medium mb-2">TSK-101</div>
              <p className="text-white text-sm">
                Create a reusable Button component
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Activity Feed */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Team Activity Feed</h2>
          <div className="space-y-4">
            <div>
              <p className="text-white text-sm mb-1">Alex merged PR #42</p>
              <p className="text-gray-400 text-xs">1h ago</p>
            </div>
            <div>
              <p className="text-white text-sm mb-1">Sarah added 3 new tasks to the backlog</p>
              <p className="text-gray-400 text-xs">3h ago</p>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="mt-auto">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Access</h2>
          <div className="space-y-3">
            <button className="flex items-center text-gray-300 hover:text-white text-sm transition-colors">
              <BookOpenIcon className="w-4 h-4 mr-2" />
              Glossary
            </button>
            <button className="flex items-center text-gray-300 hover:text-white text-sm transition-colors">
              <UserIcon className="w-4 h-4 mr-2" />
              My Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {/* Project Board Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">TaskFlow AI</h1>
          <h2 className="text-3xl font-bold text-white">Project Board</h2>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-3 gap-6">
          {/* To Do Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">To Do</h3>
            <div className="space-y-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="text-sm text-blue-400 font-medium mb-2">TSK-101</div>
                  <p className="text-white text-sm">
                    Create a reusable Button component
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* In Progress Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">In Progress</h3>
            <div className="space-y-4">
              {/* Empty state or add cards here */}
            </div>
          </div>

          {/* Done Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Done</h3>
            <div className="space-y-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <p className="text-white text-sm">Design the landing page</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <p className="text-white text-sm">Set up CI/CD pipeline</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScenarioReady; 