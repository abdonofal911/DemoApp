import { useState } from "react";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not log you in . please check your credentials or try again later"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
