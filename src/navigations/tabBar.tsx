import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {colors} from '../constants';

export default function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 75,
        alignItems: "flex-start",
        paddingTop:6,
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingHorizontal:20,
        borderTopWidth:0.2,
        borderColor:colors.lightgrey
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          // options.tabBarLabel !== undefined
          //   ? options.tabBarLabel
          //   :
          options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // navigation.navigate({name: route.name, merge: true});
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        const Icons = (color: string) => {
          return route.name == 'Shipments' ? (
            <Image source={require('../../assets/icons/box.png')} />
          ) : route.name == 'Scan' ? (
            <Image source={require('../../assets/icons/barcode.png')} />
          ) : route.name == 'Wallet' ? (
            <Image source={require('../../assets/icons/wallet.png')} />
          ) : (
            <Image source={require('../../assets/icons/profile.png')} />
          );
        };
        const color = isFocused ? colors.primary : colors.lightgrey;
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={{alignItems: 'center', paddingVertical: 6}}>
              {Icons(color)}

              <Text
                style={{
                  color,
                  fontSize: 13,
                  fontFamily: 'Raleway',
                  fontWeight: '400',
                  marginTop:7
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// ...

{
  /* <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
  {...}
</Tab.Navigator> */
}
