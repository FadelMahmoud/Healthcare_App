/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View, TextInput, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';

import bodyPartsData from '../../../assets/data/bodyPartsData';
import BodyPart from '../../components/BodyPart';
import DoctorComponent from '../../components/Doctor';
import doctorsData from '../../../assets/data/doctorsData';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  return (
    <View style={styles.container} >
        <View >
            <Text style={{fontSize: 16, color: '#7A7E82', marginTop: 7}} >
                Good Morning
            </Text>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: '#16263C' , marginTop: 3}} >
                Mahmoud
            </Text>
        </View>

        <View style={styles.searchBar}>
            <Icon style={{ marginRight: 5}} name={'search'} size={25} color={'#C2C2C2'}/>

            <TextInput
                style={styles.textInput} 
                placeholder="Search for doctors or specialist" />
        </View>

        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#16263C' }} >
                Categories
            </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={bodyPartsData}
                horizontal
                renderItem={({item}) => 
                    <BodyPart data={item}/>
                }
            />
        </View>

        <View>
            <Text style={{marginTop: 15, fontSize: 20, fontWeight: 'bold', color: '#16263C' , marginBottom: 22 }} >
                Nearby Doctors
            </Text>
            <FlatList
                style={{height: 400}}
                showsVerticalScrollIndicator={false}
                data={doctorsData}
                renderItem={({item}) => 
                    <DoctorComponent data={item}/>
                }
            />
        </View>

    </View>
  );
};

export default HomeScreen;
