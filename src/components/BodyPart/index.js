/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BodyPart = (props) => {

  const data = props.data;
  return (
    <View style={styles.container}>

        <View style={styles.bodyPartImage}>
        {/* <Image
        source={data.image}
        style={{ height: 50, width:50 }}
      /> */}
          <Icon name={data.icon} size={35} color={'#37D6CA'}/>
        </View>
        

        <Text style={{fontSize: 16, color: '#16263C'}} >
            {data.title}
        </Text>
    </View>
  );
};

export default BodyPart;
