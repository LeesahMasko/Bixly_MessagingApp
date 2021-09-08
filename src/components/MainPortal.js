import React from "react";
import styled from "styled-components";
import MainContainer from "./layout/MainContainer";
import Login from "./Login";

import { useState, useEffect } from "react";

function CurrentDisplay(props) {
  const { displayState, tokenAquired, token } = props;

  if (displayState === "login") {
    return <Login tokenAquired={tokenAquired} />;
  }

  if (displayState === "main") {
    return <MainContainer token={token} />;
  }
}

function MainPortal() {
  const [displayState, setDisplayState] = useState("login"); //default state should be the inbox

  const [token, setToken] = useLocalStorage("tokenKey");

  function renderLogin() {
    setDisplayState("login");
  }

  function renderMainContainer() {
    setDisplayState("main");
  }

  useEffect(() => {
    if (token) {
      renderMainContainer();
    } else {
      renderLogin();
    }
  }, [token]);

  return (
    <Wrapper>
      <CurrentDisplay
        token={token}
        tokenAquired={setToken}
        displayState={displayState}
      />
    </Wrapper>
  );
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
export default MainPortal;

const Wrapper = styled.div``;
