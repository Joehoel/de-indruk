import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);
    // Load any resources or data that we need prior to rendering the app

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();
                console.log("Loading app...");
                // Load fonts
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
