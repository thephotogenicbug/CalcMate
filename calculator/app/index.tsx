import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();
export default function Index() {
  const [loaded, error] = useFonts({
    Ndot: require("../assets/fonts/ndot-45.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text style={{ fontFamily: "Ndot", color: "#ffffff" }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
