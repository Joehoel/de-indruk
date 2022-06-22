import { randUser, randUuid, randJobTitle } from "@ngneat/falso";
import type { Collega } from "@typings/global";
import "react-native-get-random-values";

export const collegas: Collega[] = randUser({ length: 50 }).map(user => {
  return {
    id: randUuid(),
    user,
    job: randJobTitle(),
  };
});
