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
  nameInput: {
    paddingHorizontal: 12,
  },
  moreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreInfoWrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  moreInfoInput: {
    textAlign: 'center',
    paddingHorizontal: 24,
    color: 'black',
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
});
