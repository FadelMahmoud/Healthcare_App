/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 85,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingBottom: 5,
        borderBottomWidth: 3,
        borderColor: '#37D6CA',
    },
    bodyPartImage: {
        borderRadius: 50,
        height:50,
        width:50,
    },
    notificationIcon: {
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 1,
        height:50,
        width:50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
