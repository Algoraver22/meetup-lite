import {
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiPanel,
  EuiProvider,
  EuiSpacer,
  EuiText,
  EuiTextColor,
} from "@elastic/eui";
import logo from "../assets/logo.png";
import animation from "../assets/animation.gif";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../app/slices/AuthSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  // Check if user is already logged in
  React.useEffect(() => {
    const savedUser = localStorage.getItem("meetup-user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      dispatch(setUser(user));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const login = () => {
    if (username.trim()) {
      const user = {
        uid: Date.now().toString(), // Simple unique ID
        email: `${username}@meetup.local`,
        name: username,
      };
      
      // Save to localStorage
      localStorage.setItem("meetup-user", JSON.stringify(user));
      
      // Update Redux state
      dispatch(setUser(user));
      navigate("/");
    }
  };
  return (
    <EuiProvider colorMode="dark">
      <EuiFlexGroup
        justifyContent="center"
        alignItems="center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <EuiFlexItem grow={false}>
          <EuiPanel paddingSize="xl">
            <EuiFlexGroup justifyContent="center" alignItems="center">
              <EuiFlexItem>
                <EuiImage src={animation} alt="logo" />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiImage src={logo} alt="logo" size="230px" />
                <EuiSpacer size="xs" />
                <EuiText textAlign="center" grow={false}>
                  <h3>
                    <EuiTextColor>One Platform to</EuiTextColor>
                    <EuiTextColor color="#0b5cff"> connect</EuiTextColor>
                  </h3>
                </EuiText>
                <EuiSpacer size="l" />
                <EuiFieldText
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && login()}
                />
                <EuiSpacer size="m" />
                <EuiButton fill onClick={login} disabled={!username.trim()}>
                  Enter Meeting Platform
                </EuiButton>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiPanel>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiProvider>
  );
}

export default Login;
