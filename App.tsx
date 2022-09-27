import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar as rnStatus,
  ScrollView,
} from "react-native";
import Menu from "./src/components/Menu";
import Order from "./src/components/Order";
import { AppContextProvider } from "./src/context/AppContext";

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Pas Framework JS Tour: React Native
        </Text>
        <ScrollView
          style={{
            alignSelf: "stretch",
            flex: 1,
          }}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Menu />
          <Order />
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: rnStatus.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: { fontSize: 20, fontWeight: "bold" },
});

