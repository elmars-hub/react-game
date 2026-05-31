import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Colors } from "../../contants/colors";

function NumberContainer({ children }) {
    return (
        <View style={style.container}>
            <Text style={style.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const style = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 24 : 36,
        // fontWeight: "bold",
        textAlign: "center"
    }
})