import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginContainer } from "./styles.css";
import { authenticateUser } from "../../services/user-service";

export function LoginView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [failedMessage, setFailedMessage] = useState("");
  const navigate = useNavigate();

  const submitForm = async () => {
    setFailedMessage("");

    const user = await authenticateUser(username, password);
    if (user) {
      navigate("/dashboard");
    } else {
      setFailedMessage("Authentication failed");
    }
  };

  const isUsernameError = username.length === 0;
  const isPasswordError = password.length === 0;

  return (
    <div className={loginContainer}>
      <Box>
        <FormControl isInvalid={isUsernameError}>
          <FormLabel>Username</FormLabel>
          <Input
            id="username-input"
            type="text"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            variant="outline"
          />
          {!isUsernameError && (
            <FormErrorMessage>Username must be provided.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={isPasswordError}>
          <FormLabel>Password</FormLabel>
          <Input
            id="password-input"
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            variant="outline"
          />
          {!isPasswordError && (
            <FormErrorMessage>Password must be provided.</FormErrorMessage>
          )}
        </FormControl>
        <Button onClick={() => submitForm()} variant="flushed">
          Next
        </Button>
        <p>{failedMessage}</p>
      </Box>
    </div>
  );
}
