import { Button } from "~/common/components/ui/button";
import { Form, Link } from "react-router";
import InputPair from "~/common/components/input-pair";
import AuthButtons from "../components/auth-buttons";
import { useNavigation } from "react-router";


export default function JoinPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Button variant={"ghost"} asChild className="absolute right-9 top-8">
        <Link to="/auth/login">Login</Link>
      </Button>
      <div className="flex item-center flex-col justify-center gap-10 w-full max-w-md">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <Form className="w-full space-y-4">
          <InputPair
            label="Name"
            description="Enter your name"
            name="name"
            id="name"
            type="text"
            required
            placeholder="Enter your name"
          />
          <InputPair
            id="username"
            label="Username"
            description="Enter your username"
            name="username"
            required
            type="text"
            placeholder="i.e wemake"
          />
          <InputPair
            id="email"
            label="Email"
            description="Enter your email address"
            name="email"
            required
            type="email"
            placeholder="i.e wemake@example.com"
          />
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
          <Button className="w-full" type="submit">
            Create account
          </Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
} 