/* eslint-disable prettier/prettier */
import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreenHeader = () => {
  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Image
          source={require('../../../assets/images/mahmoud.png')}
          style={styles.bodyPartImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.notificationIcon}>
        <Icon name={'bell'} size={25} color={'black'}/>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreenHeader;
