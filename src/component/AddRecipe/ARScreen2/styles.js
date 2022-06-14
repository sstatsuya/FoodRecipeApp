import {StyleSheet} from 'react-native';
import {Colors} from '../../../constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 4,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  section: {
    marginTop: 16,
    padding: 4,
  },
  sectionTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  inputWrapper: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 4,
  },
  nextBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.colorYellow,
    width: 60,
    aspectRatio: 1,
    borderRadius: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSelectBtn: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 360,
    overflow: 'hidden',
  },
  foodImage: {
    resizeMode: 'cover',
    flex: 1,
    aspectRatio: 1,
  },
  pickImageWrapper: {
    width: '100%',
    padding: 24,
    display: 'flex',
    alignItems: 'center',
  },
  pickImgTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickImgDesc: {
    fontSize: 18,
    marginVertical: 4,
  },
  pickImgBtn: {
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  pickImgTxt: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
