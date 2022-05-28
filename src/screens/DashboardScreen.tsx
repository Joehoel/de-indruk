import BerichtCard from "@components/BerichtCard";
import Card from "@components/Card";
import LaatsteBerichten from "@components/LaatsteBerichten";
import VerjaardagCard from "@components/VerjaardagCard";
import Verjaardagen from "@components/Verjaardagen";
import { berichten } from "@constants/berichten";
import { verjaardagen } from "@constants/verjaardagen";
import Box from "@elements/Box";
import List from "@elements/List";
import Text from "@elements/Text";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faBullhorn,
  faMessageQuestion,
  faUsers,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { makeStyles, useTheme } from "@lib/theme";
import {
  randImg,
  randPastDate,
  randSong,
  randSoonDate,
  randUser,
} from "@ngneat/falso";
import { Avatar, Badge } from "@rneui/themed";
import type { Bericht, Verjaardag } from "@typings";
import { useMemo } from "react";
import { ScrollView } from "react-native";
import "react-native-get-random-values";
import { SafeAreaView } from "react-native-safe-area-context";

const useStyles = makeStyles(theme => ({
  container: {
    paddingHorizontal: theme.spacing.md,
  },
  header: {
    marginBottom: theme.spacing.xs,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  hello: {
    marginBottom: 29,
  },
  latest: {
    marginTop: 44,
  },
  berichten: { marginTop: 18 },
}));

export default function DashboardScreen() {
  const styles = useStyles();

  return (
    <SafeAreaView edges={["top"]}>
      <ScrollView style={styles.container} bounces={false}>
        <Header />
        <Greeting />
        <CardGrid />
        <LaatsteBerichten berichten={berichten} />
        <Verjaardagen verjaardagen={verjaardagen} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Box style={styles.header}>
      <Box>
        <FontAwesomeIcon
          icon={faBell}
          size={20}
          color={theme.colors.darkBlue2}
          style={{ opacity: 0.8 }}
        />
        <Badge
          value="1"
          containerStyle={{
            position: "absolute",
            left: 10,
            bottom: 10,
          }}
          badgeStyle={{
            backgroundColor: theme.colors.primary,
          }}
        />
      </Box>
      <Avatar
        containerStyle={{ marginLeft: 20 }}
        rounded
        size={48}
        source={{
          uri: "https://avatars.githubusercontent.com/u/31251240?s=400&u=54c0df6f19ffa5e937cd0d4dce274c280a402d61&v=4",
        }}
      />
    </Box>
  );
}

function Greeting() {
  const styles = useStyles();

  return (
    <Box style={styles.hello}>
      <Text variant="h1">
        Hello,{"\n"}
        <Text variant="semibold">Andreas 👋🏻</Text>
      </Text>
    </Box>
  );
}

function CardGrid() {
  const theme = useTheme();

  const spacing = 16;
  const columns = 2;

  const cards: { text: string; icon: IconProp; color: string }[] = useMemo(
    () => [
      { text: "Nieuws", icon: faBullhorn, color: theme.colors.primary },
      { text: "Collega's", icon: faUsers, color: theme.colors.tertiary },
      {
        text: "FAQ",
        icon: faMessageQuestion,
        color: theme.colors.secondary,
      },
    ],
    [theme.colors.primary, theme.colors.secondary, theme.colors.tertiary]
  );

  return (
    <Box flexWrap="wrap" flexDirection="row">
      {cards.map((card, index) => (
        <Card
          key={`card-${card.text}`}
          text={card.text}
          color={card.color}
          icon={card.icon}
          style={{
            marginBottom: spacing,
            marginLeft: index % columns !== 0 ? spacing : 0,
          }}
        />
      ))}
    </Box>
  );

  // <FlatList
  //   scrollEnabled={false}
  //   numColumns={columns}
  //   data={cards}
  //   keyExtractor={(item, index) => `${item.text}-${index}`}
  //   renderItem={({ item, index }) => {
  //     return (
  //       <Card
  //         text={item.text}
  //         color={item.color}
  //         icon={item.icon}
  //         style={{
  //           marginBottom: spacing,
  //           marginLeft: index % columns !== 0 ? spacing : 0,
  //         }}
  //       />
  //     );
  //   }}
  // />
}
