import { Alert, ToastAndroid, Platform } from "react-native";

export class Message {
    static success(message: string) {
        Message.send("Gelukt!", message);
    }

    static error(message: string) {
        Message.send("Oeps!", message);
    }

    static send(title: string, message: string) {
        if (Platform.OS === "android") {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert(title, message);
        }
    }
}
