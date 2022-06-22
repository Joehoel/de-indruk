/* eslint-disable global-require */
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

/**
 * It loads resources and data asynchronously, and then sets the loading state to complete
 * @returns A boolean value that is true when the app is loaded.
 */
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // Load any resources or data that we need prior to rendering the app

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        console.log("Loading app...");
        // Load fonts

        await Font.loadAsync({
          "Gilroy-SemiBold": require("../../assets/fonts/Gilroy-SemiBold.ttf"),
          "Gilroy-Regular": require("../../assets/fonts/Gilroy-Regular.ttf"),
          "Gilroy-Bold": require("../../assets/fonts/Gilroy-Bold.ttf"),
          "Gilroy-Medium": require("../../assets/fonts/Gilroy-Medium.ttf"),
          "SFNS-Display-Regular": require("../../assets/fonts/SFNS-Display-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service

        console.warn(e);
      } finally {
        setLoadingComplete(true);

        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
