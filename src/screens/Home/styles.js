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
  }
});

export default styles;
