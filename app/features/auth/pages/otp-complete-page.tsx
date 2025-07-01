import { Button } from '~/common/components/ui/button';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';

export default function OtpPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex items-center flex-col justify-center w-full max-w-md gap-10">
        <div>
          <h1 className="text-2xl font-semibold text-center">Confirm OTP</h1>
          <p className="text-sm text-muted-foreground">
            We will send you a 4-digit code to log in to your account.
          </p>
        </div>
        <Form className="w-full space-y-4">
          <InputPair
            label="Email"
            description="Enter your email address"
            name="email"
            id="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />
            <InputPair
            label="OTP"
            description="Enter the OTP code sent to your email address"
            name="otp"
            id="otp"
            required
            type="number"
            placeholder="i.e 1234"
          />
          <Button className="w-full" type="submit">
            Log in
          </Button>
        </Form>
      </div>
  </div>
  );
} 