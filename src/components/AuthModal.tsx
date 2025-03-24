
import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background/80 backdrop-blur-xl border-white/10 p-6">
        {isSignIn ? (
          <SignInForm 
            onSuccess={onClose} 
            onToggleForm={toggleForm} 
          />
        ) : (
          <SignUpForm 
            onSuccess={onClose} 
            onToggleForm={toggleForm} 
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
