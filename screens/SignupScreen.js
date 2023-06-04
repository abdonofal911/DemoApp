import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContent);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try { 
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.log(error)

      Alert.alert(
        "Authentication Failed",
        "Could not create user . please check your inputs and try again later"
      );
      setIsAuthenticating(false);

    }
    setIsAuthenticating(false);
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="creating user ..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
