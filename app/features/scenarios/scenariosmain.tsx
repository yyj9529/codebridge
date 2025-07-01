import React from 'react';
import { Avatar } from '../../common/components/ui/avatar';
import { Button } from '../../common/components/ui/button';
import { Card } from '../../common/components/ui/card';

export function ScenariosMain() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-md w-full">
        <Card className="p-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to the TaskFlow AI Team!</h1>
          <div className="flex items-center mb-4">
            <Avatar className="mr-4" />
            <div>
              <p className="text-lg">Hi Sarah, the Product Manager for this project. Our goal is to build a great tool to boost team productivity.</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Meet Your Core Team</h2>
          <div className="flex mb-4">
            <div className="flex items-center mr-4">
              <Avatar className="mr-2" />
              <div>
                <p className="font-bold">Alex</p>
                <p>Senior Backend Dev</p>
              </div>
            </div>
            <div className="flex items-center">
              <Avatar className="mr-2" />
              <div>
                <p className="font-bold">David</p>
                <p>Frontend Lead</p>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">How We Work</h2>
          <p className="mb-4">We work in 2-week sprints and manage all our tasks on the Kanban board you see on the right.</p>
          <Button className="w-full">Let's Get Started</Button>
        </Card>
      </div>
    </div>
  );
}

export default ScenariosMain; 