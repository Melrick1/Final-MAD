import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

function CustomDrawerContent(props) {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="SignOut"
        onPress={() =>  navigation.replace('SignIn')}
        style={styles.signOutItem}
        labelStyle={styles.signOutLabel}
        inactiveTintColor="#FFF"
        activeTintColor="#FFF"
        activeBackgroundColor="#1B5045"
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  signOutItem: {
    borderRadius: 25,
  },
  signOutLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
})

export default CustomDrawerContent;