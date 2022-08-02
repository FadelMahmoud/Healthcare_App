/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: '100%',
        justifyContent: 'space-evenly',
    },
    messageView: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        textAlign: 'center',
        paddingHorizontal: 10,
        fontSize: 15,
        marginTop: 15,
    },
    image: {
        height: 400,
        width: '100%',
        resizeMode: 'contain',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 120,
        justifyContent: 'space-evenly',
        height: 45,
        borderRadius: 15,
        backgroundColor: '#37D6CA',
    },
    buttonTexy: {
        fontSize: 15,
        color: '#fff',
    }
});

export default styles;
