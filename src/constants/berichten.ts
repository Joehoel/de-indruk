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
    image:
      "https://images.unsplash.com/photo-1655883870436-36c9c20719aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    text: randTextRange({ min: 1400, max: 1500 }),
  };
});
