import { useState, useEffect, useCallback } from 'react';


export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // check token
  const checkAuth = useCallback(() => {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');
    const now = Date.now();

    if (token && expiresIn && now < parseInt(expiresIn, 10)) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // After login in
  const login = useCallback((token, expiresInSeconds) => {
    const now = Date.now();
    const expireTime = now + expiresInSeconds * 1000;
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expireTime);

    setIsLoggedIn(true);
  }, []);

  const getToken = () => {
    return localStorage.getItem('token');
  };


  // After log out
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');

    setIsLoggedIn(false);
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    isLoggedIn,
    login,
    logout,
    getToken
  };
}
