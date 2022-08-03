/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 110,
        width: '100%',
        padding: 15,
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor:  '#7A7E82',
        // marginBottom:15,
    },
    bodyPartImage: {
        borderRadius: 50,
        overflow: 'hidden',
        borderColor: 'black',
        marginBottom: 10,
        height:80,
        width:80,
    },
    specialistText: {
        alignSelf: 'flex-start',
        marginTop: 12,
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical: 5,
        color: 'white',
        fontSize: 13,
        backgroundColor: '#37D6CA',
    }
});

export default styles;
