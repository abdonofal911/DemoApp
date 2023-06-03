import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { Alert } from "react-native";
function SignupScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  async function signUpHandler({ email, password }) {
  
    setIsAuthenticating(true)

    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not create user . please check your inputs and try again later"
      );
    }
    setIsAuthenticating(false)
  }
  if(isAuthenticating){
    return <LoadingOverlay message="creating user ..." />
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
