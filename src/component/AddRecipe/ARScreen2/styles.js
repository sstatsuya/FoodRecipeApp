import {StyleSheet} from 'react-native';
import {Colors} from '../../../constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 4,
    paddingBottom: 80
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
    backgroundColor: Colors.colorYellow,
    borderRadius: 10,
    paddingVertical: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  pickImgTxt: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  ingredientWrapper: {
    width: '100%',
    paddingHorizontal: '10%',
  },
  ingredientItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ingredientBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
  },
  ingredientName: {
    flex: 3,
    backgroundColor: '#ddd',
  },
  ingredientAmount: {
    flex: 1,
  },
  removeBtn:{
    marginLeft: 8,
  },
  addIngredientBtn: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
});
