import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChatRoom({navigation}){
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(2021, 7, 21, 10,21,23),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Expo',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(2021, 7, 21, 10,21,23),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 4,
        text: 'Hello developer',
        createdAt: new Date(2021, 7, 21, 10,21,23),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 5,
        text: 'Hello developer',
        createdAt: new Date(2021, 7, 21, 10,21,23),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 6,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Expo',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 7,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Expo',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const handleSendMessage = () => {
    console.log(newMessage)
    setNewMessage('')
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{marginTop: 30, height: '100%'}}>
        <FlatList 
          data={messages}
          style={{paddingBottom: 40}}
          keyExtractor={item=>item._id}
          renderItem={({item}) => (
              <View 
                style={{
                  paddingVertical: 24, 
                  paddingHorizontal: 20, 
                  marginVertical: 2,
                }}
                onPress={() => navigation.navigate('ChatRoom')}
              >
                <View 
                  style={{
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: item.user.name === 'React Native' ? 1 : 30,
                    borderBottomLeftRadius: item.user.name === 'React Native' ? 30 : 2,
                    marginLeft: item.user.name === 'React Native' ? 60 : 2,
                    marginRight: item.user.name === 'React Native' ? 1 : 60,
                    paddingVertical: 20,
                    paddingHorizontal: 20, 
                    backgroundColor: item.user.name === 'React Native' ? '#e7e7e7' : 'blue'
                  }}>
                  <Text style={{ fontFamily: 'Poppins', color: item.user.name === 'React Native' ? 'black' : 'white' }}>{item.text}</Text> 
                </View>
              </View>
          )}
        />

        <View style={{bottom: 20}}>
          <View style={{
              width: '100%', 
              paddingHorizontal: 40,
              paddingVertical: 20, 
            }}>
              <View style={{
                width: '100%', 
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center', 
              }}>
                <View style={{ width: '90%'}}>
                  <TextInput
                    style={{borderRadius: 40, marginRight: 20, borderWidth: 2, borderColor: 'black', padding: 15}}
                    onChangeText={(e) => setNewMessage(e)}
                    value={newMessage}
                    blurOnSubmit={true}
                    textContentType="name"
                    keyboardType="default"
                    placeholder = 'Write something here'
                    placeholderTextColor = "#8c8e8f"
                    autoCapitalize = "none"
                    autoCompleteType="name"
                  />
                </View>
                <View> 
                  <TouchableOpacity
                    activeOpacity={0.3}
                    onPress={handleSendMessage}
                    style={{borderRadius: 999, padding: 20, backgroundColor: 'black'}}>
                    <Ionicons name='send' style={{ color: 'white'}} />
                  </TouchableOpacity>
                </View> 
              </View>
          </View>
        </View>
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