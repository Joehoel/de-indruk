import { useNavigation } from "@react-navigation/native";
import { makeStyles, Text } from "@rneui/themed";
import type { ItemType } from "@typings/global";
import type { BerichtScreenNavigationProp } from "@typings/navigation";
import { TouchableOpacity, View } from "react-native";

const useStyles = makeStyles(theme => ({
  item: {
    padding: 10,
  },
  content: {
    flexDirection: "column",
    flex: 1,
  },
  title: { fontWeight: "700", marginTop: 5 },
  date: {
    fontWeight: "500",
    color: theme.colors?.text,
  },
}));

interface BerichtItemProps {
  item: ItemType;
}

export default function BerichtItem({ item }: BerichtItemProps) {
  const navigation = useNavigation<BerichtScreenNavigationProp>();

  const styles = useStyles();
  const handlePress = () => {
    navigation.navigate("Bericht", { item });
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <View style={styles.content}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
