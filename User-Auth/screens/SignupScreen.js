import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth';

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    const response = await createUser(email, password);
    // console.log('SIGN UP RESPONSE');
    // console.log(response);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user....' />
  }

  return <AuthContent onAuthenticate={authenticationHandler} />;
}

export default SignupScreen;
