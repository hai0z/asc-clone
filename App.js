import React from "react";
import Navigation from "./navigation/navigator";
import AuthProvider from "./context/AuthProvider";
export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
