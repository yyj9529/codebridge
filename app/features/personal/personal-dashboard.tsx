import { Button } from '../../common/components/ui/button';
import { Card } from '../../common/components/ui/card';
import { Avatar } from '../../common/components/ui/avatar';
import { ChevronRightIcon, TrophyIcon, StarIcon, TrendingUpIcon } from 'lucide-react';

export default function PersonalDashboard() {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          <span className="font-bold text-lg">CodeBridge</span>
        </div>
        
        <nav className="space-y-2">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Dashboard
          </div>
          <div className="text-gray-400 px-4 py-2 hover:text-white cursor-pointer">
            Scenarios
          </div>
          <div className="text-gray-400 px-4 py-2 hover:text-white cursor-pointer">
            Profile
          </div>
          <div className="text-gray-400 px-4 py-2 hover:text-white cursor-pointer">
            Glossary
          </div>
        </nav>

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3 p-2">
            <Avatar className="w-8 h-8">
              <img src="/api/placeholder/32/32" alt="User" className="rounded-full" />
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">My Account</div>
              <div className="text-gray-400">Settings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Personal Dashboard</h1>

          {/* Top Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Profile Card */}
            <Card className="bg-gray-800 p-6 col-span-1">
              <div className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-4">
                  <img src="/api/placeholder/64/64" alt="Alex" className="rounded-full" />
                </Avatar>
                <h3 className="font-bold text-lg mb-2">Welcome back, Alex!</h3>
                <p className="text-gray-400 text-sm mb-4">Your personalized learning journey awaits.</p>
                
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-gray-700"/>
                    <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={`${82 * 1.88} 188`} className="text-pink-500"/>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">82%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">Overall Progress</p>
                
                <Button variant="outline" size="sm">
                  Edit Profile
                </Button>
              </div>
            </Card>

            {/* Stats Cards */}
            <Card className="bg-gray-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Scenarios Completed</span>
                <TrophyIcon className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold">14</div>
            </Card>

            <Card className="bg-gray-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Badges Earned</span>
                <StarIcon className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-3xl font-bold">6</div>
            </Card>

            <Card className="bg-gray-800 p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Average Score</span>
                <TrendingUpIcon className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold">88%</div>
            </Card>
          </div>

          {/* Recent Scenarios and Start New Journey */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Recent Scenarios */}
            <div className="col-span-2">
              <h2 className="text-xl font-bold mb-4">Recent Scenarios</h2>
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-gray-800 p-4">
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3"></div>
                  <h3 className="font-bold text-sm mb-1">React State Management Deep Dive</h3>
                  <p className="text-xs text-gray-400 mb-2">Master useState, useContext, and useReducer for complex React applications.</p>
                  <span className="inline-block bg-yellow-600 text-yellow-100 text-xs px-2 py-1 rounded mb-2">Medium</span>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-blue-600 h-1 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">Continue Scenario</Button>
                </Card>

                <Card className="bg-gray-800 p-4">
                  <div className="h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-3"></div>
                  <h3 className="font-bold text-sm mb-1">Node.js REST API Development</h3>
                  <p className="text-xs text-gray-400 mb-2">Build robust RESTful APIs with Express.js and MongoDB.</p>
                  <span className="inline-block bg-red-600 text-red-100 text-xs px-2 py-1 rounded mb-2">Hard</span>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-blue-600 h-1 rounded-full" style={{width: '40%'}}></div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">Continue Scenario</Button>
                </Card>

                <Card className="bg-gray-800 p-4">
                  <div className="h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg mb-3"></div>
                  <h3 className="font-bold text-sm mb-1">SQL Fundamentals</h3>
                  <p className="text-xs text-gray-400 mb-2">Learn essential SQL queries and database operations.</p>
                  <span className="inline-block bg-green-600 text-green-100 text-xs px-2 py-1 rounded mb-2">Easy</span>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div className="bg-blue-600 h-1 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">Continue Scenario</Button>
                </Card>
              </div>
            </div>

            {/* Start New Journey */}
            <Card className="bg-gradient-to-br from-purple-900 to-pink-900 p-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <StarIcon className="w-12 h-12 text-pink-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">Start a New Journey</h3>
                <p className="text-sm text-gray-300 mb-6">Begin your next coding adventure and unlock new skills tailored just for you.</p>
                <Button className="bg-pink-600 hover:bg-pink-700">
                  Start New Scenario
                </Button>
              </div>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6">
            {/* Skill Growth Chart */}
            <Card className="bg-gray-800 p-6">
              <h3 className="font-bold text-lg mb-2">Skill Growth Over Time</h3>
              <p className="text-gray-400 text-sm mb-4">Proficiency in key tech stacks</p>
              <div className="h-48 flex items-end justify-between px-4">
                {/* Mock chart bars */}
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '60px'}}></div>
                  <span className="text-xs mt-2">Jan</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '70px'}}></div>
                  <span className="text-xs mt-2">Feb</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '85px'}}></div>
                  <span className="text-xs mt-2">Mar</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '90px'}}></div>
                  <span className="text-xs mt-2">Apr</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '95px'}}></div>
                  <span className="text-xs mt-2">May</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '100px'}}></div>
                  <span className="text-xs mt-2">Jun</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '110px'}}></div>
                  <span className="text-xs mt-2">Jul</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 bg-pink-500 rounded-t" style={{height: '120px'}}></div>
                  <span className="text-xs mt-2">Aug</span>
                </div>
              </div>
            </Card>

            {/* Personalized Recommendations */}
            <Card className="bg-gray-800 p-6">
              <h3 className="font-bold text-lg mb-2">Personalized Recommendations</h3>
              <p className="text-gray-400 text-sm mb-4">Scenarios tailored for your growth</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium">Advanced Git Workflows</div>
                    <div className="text-sm text-gray-400">Version Control</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium">Unit Testing with Jest</div>
                    <div className="text-sm text-gray-400">Testing</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium">Building Serverless Functions</div>
                    <div className="text-sm text-gray-400">Cloud</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium">GraphQL API Design</div>
                    <div className="text-sm text-gray-400">Backend</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Explore More Button */}
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Explore More Scenarios <ChevronRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 