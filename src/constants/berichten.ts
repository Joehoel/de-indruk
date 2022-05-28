import "react-native-get-random-values";
import { randImg, randSong, randPastDate } from "@ngneat/falso";
import type { Bericht } from "@typings/global";

export const berichten: Bericht[] = randImg({ length: 10 }).map(img => {
  return {
    title: randSong(),
    date: randPastDate(),
    image: img,
  };
});
