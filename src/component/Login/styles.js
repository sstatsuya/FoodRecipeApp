import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../../constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
  },
  startImgWrapper: {
    width: '100%',
    aspectRatio: 1,
  },
  startImg: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'cover',
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
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  startBtn: {
    marginTop: 12,
    width: '90%',
    backgroundColor: Colors.colorYellow,
    padding: 16,
    borderRadius: 36,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  form: {
    marginTop: 24,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '90%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginVertical: 8,
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#333',
    height: '80%',
    marginTop: -4,
    flex: 1,
    marginLeft: 8,
  },
});
