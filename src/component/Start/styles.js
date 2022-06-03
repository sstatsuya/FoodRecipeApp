import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  startImg: {
    width: '100%',
    resizeMode: 'contain',
    padding: 0,
    margin: 0,
    aspectRatio: 1,
  },
  startInfo: {
    fontSize: 20,
    color: Colors.colorOrange,
    fontWeight: 'bold',
  },
  startTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 12,
  },
  startBtnWrapper: {
    position: 'absolute',
    bottom: 24,
    left: '5%',
    width: '70%',
  },
  startBtn: {
    width: '70%',
    backgroundColor: Colors.colorYellow,
    padding: 16,
    borderRadius: 36,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
