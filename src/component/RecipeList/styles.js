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
    paddingHorizontal: 12,
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
  typeSection: {
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeSV: {
    // flex: 1,
    flexGrow: 0,
  },
  typeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  typeItem: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 40,
    marginHorizontal: 6,
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
    width: '100%',
    marginTop: 12,
  },
  recipeWrapper: {
    width: '94%',
    marginLeft: '3%',
    marginTop: 4,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recipeItem: {
    width: '40%',
    height: 200,
    borderRadius: 36,
    backgroundColor: 'pink',
    marginBottom: 24,
    marginHorizontal: '5%',
    display: 'flex',
    alignItems: 'center',
  },
  recipeItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
    paddingHorizontal: 12,
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
  showAddTypeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  addNewTypeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeNewWrapper: {
    maxWidth: 240,
    height: '80%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    borderRadius: 36,
    marginRight: 4,
    paddingHorizontal: 12,
  },
  addTypeControlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addTypeControlBtn: {
    marginHorizontal: 4,
  },
  deleteTypeBtn: {
    position: 'absolute',
    top: -10,
    right: -10,
    zIndex: 2,
  },
  cancelTypeBtn: {
    textDecorationLine: 'underline',
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
    marginRight: 12,
  },
  recipeAddBtn: {
    backgroundColor: Colors.colorOrange,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 360,
    zIndex: 2,
  },
});
