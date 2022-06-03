import {ColorPropType, StyleSheet} from 'react-native';
import {Colors} from '../../constant/Styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginVertical: 12,
  },
  searchWrapper: {
    flex: 1,
    isplay: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 24,
    paddingHorizontal: 12,
  },
  searchInput: {
    marginLeft: 12,
    fontSize: 16,
  },
  filterBtn: {
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 12,
    marginLeft: 24,
  },
  typeWrapper: {
    paddingHorizontal: 24,
    flexGrow: 0,
  },
  typeItem: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 36,
    marginRight: 12,
  },
  typeItemText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 26,
  },
  typeItemActive: {
    backgroundColor: Colors.colorOrange,
  },
  typeItemTextActive: {
    color: 'white',
  },
  recipeSVWrapper: {
    flex: 1,
  },
  recipeWrapper: {
    marginTop: 4,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  recipeItem: {
    width: '40%',
    height: 200,
    borderRadius: 36,
    backgroundColor: 'pink',
    marginVertical: 12,
    display: 'flex',
    alignItems: 'center',
  },
  recipeItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
    paddingHorizontal: 12
  },
  recipeItemImgWrapper: {
    width: '80%',
    aspectRatio: 1,
    borderRadius: 180,
    overflow: 'hidden',
  },
  recipeItemImg: {
    resizeMode: 'cover',
    flex: 1,
    aspectRatio: 1,
  },
});
