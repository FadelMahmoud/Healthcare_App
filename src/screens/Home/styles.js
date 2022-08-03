/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    padding: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    height:50,
    marginVertical: 20,
  },
  textInput: {
    fontSize: 15,
    color: 'black',
  },
  bodyPartImage: {
    height: 50,
    width: 50,
    borderRadius:25,
  },

  // START MODAL STYLES
  
  centeredView: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:85,
  },
  modalView: {
    backgroundColor: 'lightblue',
    margin: 20,
    height: '100%',
    width: '100%',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
  // END MODAL STYLES

});

export default styles;
