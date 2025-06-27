import { Button } from '~/common/components/ui/button';

export default function SocialStartPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Social Login</h2>
        <p className="text-center text-gray-600 mb-4">Choose a provider to start the login process.</p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
            Login with Facebook
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
} 