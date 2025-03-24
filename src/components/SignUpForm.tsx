
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Loader2 } from "lucide-react";

interface SignUpFormProps {
  onSuccess?: () => void;
  onToggleForm?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess, onToggleForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await signUp(name, email, password);
      if (onSuccess) onSuccess();
    } catch (error) {
      // Error is handled by the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Create Account</h2>
        <p className="text-muted-foreground">Enter your details to create a new account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background/50 backdrop-blur-sm"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-background/50 backdrop-blur-sm"
            minLength={6}
          />
          <p className="text-xs text-muted-foreground mt-1">Must be at least 6 characters</p>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary/80 hover:bg-primary/90 backdrop-blur-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account
            </>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
      
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <button 
            onClick={onToggleForm} 
            className="text-primary hover:underline"
            type="button"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
