import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5',
    },
    topBar: {
        paddingTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 180,
        marginVertical: 40
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default styles;
