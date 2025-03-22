import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
}

interface Profile {
  full_name?: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication for now
  useEffect(() => {
    // Simulate loading auth state
    const timer = setTimeout(() => {
      setLoading(false);
      // For now, no user is logged in by default
      setUser(null);
      setProfile(null);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock sign in functionality
    setLoading(true);
    try {
      // In a real app, this would call an API
      console.log('Sign in with', email, password);
      
      // Mock successful sign in
      setUser({
        id: '123',
        email,
      });
      
      setProfile({
        full_name: 'John Doe',
      });
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    // Mock sign up functionality
    setLoading(true);
    try {
      // In a real app, this would call an API
      console.log('Sign up with', email, password, name);
      
      // Mock successful sign up
      setUser({
        id: '123',
        email,
      });
      
      setProfile({
        full_name: name,
      });
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    // Mock sign out functionality
    setLoading(true);
    try {
      // In a real app, this would call an API
      console.log('Sign out');
      
      // Clear user and profile
      setUser(null);
      setProfile(null);
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
