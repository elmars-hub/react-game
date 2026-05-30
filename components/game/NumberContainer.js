import { Text, StyleSheet, View } from "react-native";
import { Colors } from "../../contants/colors";

function NumberContainer({ children }) {
    return (
        <View style={style.container}>
            <Text style={style.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer

const style = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 36,
        // fontWeight: "bold",
        textAlign: "center"
    }
})