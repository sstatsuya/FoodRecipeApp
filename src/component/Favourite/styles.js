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
  favouriteItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    height: 90,
  },
  favouriteImgWrapper: {
    width: '20%',
    aspectRatio: 1,
    borderRadius: 360,
    overflow: 'hidden',
  },
  foodImg: {
    resizeMode: 'cover',
    flex: 1,
    aspectRatio: 1,
  },
  favouriteInfo: {
    flex: 1,
    display: 'flex',
    height: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 12,
  },
  selectBtn: {
    width: 24,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  levelWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  level: {
    width: 12,
    height: 12,
    backgroundColor: '#BAF5C0',
  },
  levelText:{
      color: 'black',
      fontWeight: 'bold',
      marginLeft: 8
  }
});
