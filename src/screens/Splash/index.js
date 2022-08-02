/* eslint-disable prettier/prettier */
import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = (props) => {

  const navigation = useNavigation();

  return (

    <View style={styles.container}>
        <View style={styles.messageView}>
            <Text style={styles.title}>Are you feeling sick?</Text>
            <Text style={styles.subtitle}>You will get the best advisors, doctors and digital prescripions</Text>
        </View>

      <Image
        style={styles.image}
        source={require('../../../assets/images/splashImage.png')}
      />

      <Pressable 
        style={{alignItems: 'center'}}
        onPress={ () => navigation.navigate('Home') }
      >
        <View style={styles.button}>
            <Text style={styles.buttonTexy}> Next </Text>
            <Icon name='angle-right' size={25} color={'#fff'}/>
        </View>
      </Pressable>
    </View>

  );
};

export default SplashScreen;
