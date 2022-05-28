import List from "@elements/List";
import type { Verjaardag } from "@typings";
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
