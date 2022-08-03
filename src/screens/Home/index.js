/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View, TextInput, FlatList, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import bodyPartsData from '../../../assets/data/bodyPartsData';
import BodyPart from '../../components/BodyPart';
import DoctorComponent from '../../components/Doctor';
import doctorsData from '../../../assets/data/doctorsData';
import Icon from 'react-native-vector-icons/FontAwesome5';


const HomeScreen = () => {

    const [ modalVisible, setModalVisible ] = useState(false);
    const [ modalData, setModalData ] = useState([]);

  return (

    <View style={styles.container} >


    {/* <View style={styles.centeredView}> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>{route.params.selectedDoctor.name}</Text> */}
            <Text style={styles.modalText}> {modalData.name} </Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    {/* </View> */}


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
                // MAYBE USE WINDOW HIEGHT 
                showsVerticalScrollIndicator={false}
                data={doctorsData}
                renderItem={({item}) =>
                <Pressable
                style={{borderRadius: 40, marginBottom: 15}}
                onPress={ () => { 
                  setModalData(item);
                  // console.log( "Modal data : " + item )
                  // console.log( "Modal data.NAME : " + item.name )
                  setModalVisible(!modalVisible);
                } }
                >
                    <DoctorComponent data={item}/>
                </Pressable>
                }
            />
        </View>

    </View>
  );
};

export default HomeScreen;
