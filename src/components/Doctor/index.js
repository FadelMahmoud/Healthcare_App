/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const DoctorComponent = (props) => {

  const data = props.data;

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={data.image}
        style={styles.bodyPartImage}
      />

      <View style={{width: '45%', marginHorizontal: 15, height: '80%'}}>
        <Text style={{fontSize: 20, color: '#16263C', marginBottom: 5}} >
        {data.name}
        </Text>
        <Text>{data.hospitalName}</Text>
      </View>

      <Text style={styles.specialistText}>{data.specialist}</Text>

    </TouchableOpacity>


  );
};

export default DoctorComponent;
