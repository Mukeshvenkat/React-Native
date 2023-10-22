import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

const SignupScreen = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  const authenticationHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (err) {
      Alert.alert('Authentication Failed', 'Unable to create new user, try again with valid creds!');
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user....' />
  }

  return <AuthContent onAuthenticate={authenticationHandler} />;
}

export default SignupScreen;
