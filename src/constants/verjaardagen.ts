import { randUser, randSoonDate } from "@ngneat/falso";
import type { Verjaardag } from "@typings/global";
import "react-native-get-random-values";

export const verjaardagen: Verjaardag[] = randUser({ length: 5 }).map(user => {
  return {
    user,
    date: randSoonDate(),
  };
});
