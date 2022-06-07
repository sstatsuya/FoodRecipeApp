import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loggedWrapper:{
    width: '100%',
    height: Dimensions.get('window').height/2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loggedText:{
    fontSize: 32,
    color: '#333',
    marginTop: 12
  }
});
