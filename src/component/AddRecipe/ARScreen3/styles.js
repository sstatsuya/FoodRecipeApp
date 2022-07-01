import {StyleSheet} from 'react-native';
import {Colors} from '../../../constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 4,
    paddingBottom: 80,
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
    marginBottom: 8,
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
  tutorialWrapper: {
    width: '100%',
  },
  tutorialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  removeBtn:{
    marginLeft: 12,
    marginRight: 8
  },  
  stepNumberText: {
    width: '100%',
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
    marginBottom: 12
  },
  addStepBtn: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  stepInput: {
    flex: 1,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    borderRadius: 20,
    paddingHorizontal: 24,
  },
});
