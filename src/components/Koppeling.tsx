// import { FontAwesome, Ionicons } from "@expo/vector-icons";
// import type { KoppelingType } from "@typings";
// import React from "react";
// import type { GestureResponderEvent } from "react-native";
// import { TouchableOpacity, View } from "react-native";
// import * as WebBrowser from "expo-web-browser";
// import { makeStyles, useTheme } from "@lib/theme";
// import Text from "@elements/Text";

// const useStyles = makeStyles(theme => ({
//   koppeling: {
//     flexDirection: "row",
//     paddingVertical: spacing.lg,
//     paddingHorizontal: spacing.md,
//   },
//   icon: {
//     width: 40,
//     height: 40,
//     backgroundColor: theme.colors?.primary,
//     borderRadius: 40,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   content: {
//     marginLeft: spacing.md,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     flex: 1,
//   },
//   title: { fontWeight: "bold", marginBottom: spacing.xs },
//   description: {},
// }));

// interface KoppelingProps {
//   koppeling: KoppelingType;
// }

// export default function Koppeling({ koppeling }: KoppelingProps) {
//   const { title, description, url } = koppeling;
//   const theme = useTheme();

//   const styles = useStyles();

//   const handlePress = (event: GestureResponderEvent) => {
//     WebBrowser.openBrowserAsync(url);
//   };

//   return (
//     <TouchableOpacity style={styles.koppeling} onPress={handlePress}>
//       <View style={styles.icon}>
//         <FontAwesome name="chain" color={theme.colors.white} size={15} />
//       </View>
//       <View style={styles.content}>
//         <View>
//           <Text style={styles.title}>{title}</Text>
//           <Text style={styles.description}>{description}</Text>
//         </View>
//         <Ionicons name="arrow-forward" size={20} color={theme.colors.gray2} />
//       </View>
//     </TouchableOpacity>
//   );
// }
