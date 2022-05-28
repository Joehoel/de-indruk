import { List } from "@elements";
import type { Bericht } from "@typings/global";
import BerichtCard from "./BerichtCard";

interface LaatsteBerichtenProps {
  berichten: Bericht[];
  length?: number;
}

export default function LaatsteBerichten({
  berichten,
  length,
}: LaatsteBerichtenProps) {
  return (
    <List title="Laatste Berichten">
      {berichten?.slice(0, length || 4).map(bericht => (
        <BerichtCard key={`bericht-${bericht.date}`} bericht={bericht} />
      ))}
    </List>
  );
}
