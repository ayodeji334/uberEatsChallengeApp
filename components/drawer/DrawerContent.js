import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Avatar } from 'react-native-elements';

export function DrawerContent(props) {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar
                                size="medium"
                                rounded
                                title="Odunayo Fawumi"
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.9}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Text style={styles.title}>Odunayo Fawumi</Text>
                                <Text style={styles.caption}>@odunayo_fawumi</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.drawerSection}>
                        <DrawerItem 
                            style={styles.drawerItemTitle}
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            style={styles.drawerItemTitle}
                            icon={({color, size}) => (
                                <Icon 
                                    name="home" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            style={styles.drawerItemTitle}
                            icon={({color, size}) => (
                                <Icon 
                                    name="chatbox" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Chat"
                            onPress={() => {props.navigation.navigate('Chats')}}
                        />
                        <DrawerItem 
                            style={styles.drawerItemTitle}
                            icon={({color, size}) => (
                                <Icon 
                                    name="receipt-outline" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Order"
                            onPress={() => {props.navigation.navigate('OrdersScreen')}}
                        />
                    </View>
                    <View title="Preferences">
                        <TouchableOpacity onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text style={{ fontFamily: 'Poppins'}}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    {/* <Switch value={paperTheme.dark}/> */}
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </DrawerContentScrollView>
          
            <View style={styles.bottomDrawerSection}>
                <DrawerItem 
                    style={styles.caption}
                    icon={({color, size}) => (
                        <MaterialIcons 
                            name="exit-to-app" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Log out"
                    onPress={() => console.log('sign out')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      fontFamily: 'PoppinsBold',
      marginTop: 3,
    },
    drawerItemTitle: {
        fontSize: 16,
        fontFamily: 'PoppinsBold',
        marginTop: 3,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontFamily: 'Poppins'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      fontFamily: 'Poppins'
    },
    drawerSection: {
      marginTop: 15,
      borderTopWidth: 1,
      borderTopColor: '#000'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
