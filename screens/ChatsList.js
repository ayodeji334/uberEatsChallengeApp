import React, { useLayoutEffect } from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/images/bg1.jpg'),
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/images/bg1.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/images/bg1.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/images/bg1.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/images/bg1.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Alission Alex',
    userImg: require('../assets/images/bg1.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '7',
    userName: 'Alexander Android',
    userImg: require('../assets/images/bg1.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  }
];

export default function ChatsList({navigation}){
    useLayoutEffect(() => {
      navigation.setOptions({
          headerStyle: {
              backgroundColor: "#fff",
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
          },
          headerTitleStyle: {
              display: "none"
          },
          title: 'Chat Screen',
          headerLeft: () => {
              return (
                  <View style={{padding: 20, marginTop: 8, marginBottom: 10}}>
                      <TouchableOpacity style={{
                          padding: 8, 
                          marginTop: 8, 
                          backgroundColor: "#e7e7e7",
                          borderRadius: 9
                      }} activeOpacity={0.4} onPress={() => navigation.goBack()}>
                          <Ionicons name="md-chevron-back-sharp" size={21} color="#000" />
                      </TouchableOpacity>
                  </View>
              )
          }
      })
    }, []);

    return (
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View style={{marginTop: 30}}>
            <FlatList 
                data={messages}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={{paddingVertical: 24, paddingHorizontal: 20, backgroundColor: '#f4f4f4', marginVertical: 2}}
                        onPress={() => navigation.navigate('ChatRoomItem', {
                          name: item.userName
                        })}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
                            <View>
                                <Image
                                    source={require('../assets/images/bg1.jpg')}
                                    style={{ width: 60, height: 60, borderRadius: 999 }}
                                />
                            </View>
                            <View style={{flex: 2, marginHorizontal: 10}}>
                                <Text style={{ fontFamily: 'PoppinsBold' }}>{item.userName}</Text>
                                <Text style={{ fontFamily: 'Poppins', fontSize: 12 }}>{item.messageText}</Text> 
                            </View>
                            <View  style={{ flexDirection: 'column', alignItems: 'flex-end'}}>
                                <Text style={{ 
                                    fontFamily: 'Poppins', 
                                    paddingVertical: 2,
                                    paddingHorizontal: 5, 
                                    borderRadius: 9999,
                                    backgroundColor: '#000', 
                                    color: 'white' 
                                }}>
                                    3
                                </Text>
                                <Text style={{ fontFamily: 'Poppins', color: '#000', opacity: .4, fontWeight: '900',paddingTop: 5, fontSize: 12 }}>
                                    {item.messageTime}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});