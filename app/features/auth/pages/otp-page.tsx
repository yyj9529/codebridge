import { Button } from '~/common/components/ui/button';

export default function OtpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">OTP Code</label>
            <input type="text" id="otp" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
            Verify OTP
          </Button>
        </form>
      </div>
    </div>
  );
} 