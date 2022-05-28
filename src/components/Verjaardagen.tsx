import { List } from "@elements";
import type { Verjaardag } from "@typings/global";
import VerjaardagCard from "./VerjaardagCard";

interface VerjaardagenProps {
  verjaardagen: Verjaardag[];
}

export default function Verjaardagen({ verjaardagen }: VerjaardagenProps) {
  return (
    <List title="Verjaardagen 🎉">
      {verjaardagen?.map(verjaardag => (
        <VerjaardagCard
          key={`verjaardag-${verjaardag.date}`}
          verjaardag={verjaardag}
        />
      ))}
    </List>
  );
}
