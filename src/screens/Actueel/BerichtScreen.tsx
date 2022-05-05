import { Image, makeStyles, Text, useTheme } from "@rneui/themed";
import { BerichtScreenProps } from "@typings/navigation";
import { Dimensions, View } from "react-native";
import ParallaxScrollView from "react-native-parallax-scroll-view";

const useStyles = makeStyles(theme => ({
    bericht: {
        backgroundColor: theme.colors?.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -20,
        padding: 20,
    },
}));

const { width } = Dimensions.get("window");

export default function BerichtScreen({ route }: BerichtScreenProps) {
    const styles = useStyles();
    const { theme } = useTheme();

    const { item } = route.params;

    return (
        <ParallaxScrollView
            backgroundColor={theme.colors.background}
            contentBackgroundColor={theme.colors.background}
            parallaxHeaderHeight={250}
            renderForeground={() => (
                <View>
                    <Image
                        source={{ uri: item.image }}
                        style={{ height: 250, width }}
                    />
                </View>
            )}
        >
            <View style={styles.bericht}>
                <Text h4>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        </ParallaxScrollView>
    );
}
