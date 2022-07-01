import {ColorPropType, StyleSheet} from 'react-native';
import {Colors} from '../../constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingBottom: 36,
  },
  header: {
    width: '100%',
  },
  backBtn: {
    padding: 12,
    marginLeft: '-5%',
  },
  imgWrapper: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 360,
  },
  foodImg: {
    resizeMode: 'cover',
    flex: 1,
    aspectRatio: 1,
  },
  foodName: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  foodInfo: {
    alignSelf: 'flex-start',
    color: '#555',
    lineHeight: 18,
    marginVertical: 4,
    fontSize: 16,
  },
  types: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 8
  },
  typeItem: {
    padding: 12,
    backgroundColor: '#ccc',
    borderRadius: 12,
    marginRight: 8,
  },
  typeText: {
    color: 'black',
  },
  featureWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  feature: {
    width: '25%',
    backgroundColor: 'pink',
    aspectRatio: 1,
    borderRadius: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  featureText: {
    color: 'black',
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  ingredientWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    borderRadius: 8,
    marginTop: 8,
  },
  ingreName: {
    width: '70%',
    backgroundColor: '#ccc',
    padding: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
  },
  ingreAmount: {
    width: '30%',
    padding: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
  },
  ingreNameText: {
    color: 'black',
  },
  ingreAmountText: {
    color: 'black',
    textAlign: 'center',
  },
  recipeDetail: {
    marginTop: 4,
    color: '#555',
    lineHeight: 18,
  },
});
