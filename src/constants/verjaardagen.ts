import { randUser, randSoonDate, randUuid } from "@ngneat/falso";
import type { Verjaardag } from "@typings/global";
import "react-native-get-random-values";

export const verjaardagen: Verjaardag[] = randUser({ length: 5 }).map(user => {
  return {
    id: randUuid(),
    user,
    date: randSoonDate(),
  };
});
