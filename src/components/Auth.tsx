
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Auth = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="flex items-center gap-4">
      {isSignedIn ? (
        <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonBox: "hover:scale-105 transition-transform",
              userButtonAvatarBox: "border-2 border-primary/30"
            }
          }}
        />
      ) : (
        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/20">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="default" size="sm" className="bg-primary text-background hover:bg-primary/80">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
};

export default Auth;
