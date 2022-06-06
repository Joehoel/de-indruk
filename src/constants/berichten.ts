import "react-native-get-random-values";
import {
  randImg,
  randSong,
  randPastDate,
  randUuid,
  randTextRange,
} from "@ngneat/falso";
import type { Bericht } from "@typings/global";

export const berichten: Bericht[] = randImg({ length: 10 }).map(img => {
  return {
    id: randUuid(),
    title: randSong(),
    date: randPastDate(),
    image: img,
    text: randTextRange({ min: 1400, max: 1500 }),
  };
});
