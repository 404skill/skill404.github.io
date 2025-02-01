import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const code = new URLSearchParams(window.location.search).get('code');
      
      if (code) {
        try {
          // Exchange code for access token using your backend
          const response = await fetch('/api/auth/github/callback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
          });
          
          const data = await response.json();
          localStorage.setItem('github_token', data.access_token);
          navigate('/');
        } catch (error) {
          console.error('Authentication error:', error);
          navigate('/');
        }
      }
    };

    handleCallback();
  }, [navigate]);

  return <div>Authenticating...</div>;
} 