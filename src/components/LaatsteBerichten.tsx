import { List } from "@elements";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { Bericht } from "@typings/global";
import type { DashboardStackList } from "@typings/navigation";
import BerichtCard from "./BerichtCard";

interface LaatsteBerichtenProps {
  berichten: Bericht[];
  length?: number;
}

export default function LaatsteBerichten({
  berichten,
  length,
}: LaatsteBerichtenProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<DashboardStackList>>();

  return (
    <List title="Laatste Berichten">
      {berichten?.slice(0, length || 4).map(bericht => (
        <BerichtCard
          onPress={() => navigation.push("Bericht", { bericht })}
          key={`bericht-${bericht.date}`}
          bericht={bericht}
        />
      ))}
    </List>
  );
}
