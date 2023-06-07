import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: 'white', margin: 10, borderRadius: 10,},
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 10,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  title: {fontWeight: 'bold', fontSize: 20, padding: 5,marginTop:5},
  author: {fontWeight: 'bold', fontSize: 18, padding: 5,marginTop:5,textAlign:'right',fontStyle:'italic'},
  description: {margin:10,},
});
