import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Router } from "./src/router";
import { theme } from "./src/theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
