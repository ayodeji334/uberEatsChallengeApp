import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ChatRoom({navigation, ...props}){
  const { name  } = props.route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        elevation: 1,
        shadowOpacity: 1,
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: 'black',
        fontFamily: 'PoppinsBold',
        marginTop: 10,
        textAlign: 'center'
      },
      title: name,
      headerLeft: () => {
        return (
          <View style={{padding: 20}}>
            <TouchableOpacity style={{
                padding: 8, 
                marginTop: 0, 
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
      {
        _id: 8,
        text: 'Hello Odunayo',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Expo',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 9,
        text: 'How are you doing?',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Expo',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 10,
        text: 'Hello developer',
        createdAt: new Date(2021, 7, 21, 10,21,23),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 11,
        text: "I'm fine and yourself?",
        createdAt: new Date(2021, 7, 21, 10,21,23),
        user: {
          _id: 2,
          name: 'React Native',
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
      <View style={{marginTop: 5, height: '100%'}}>
        <ScrollView>
          <Text style={{ fontFamily: 'Poppins', color: '#000', paddingVertical: 10, textAlign: 'center'}}>Chat messages appear below</Text>
          {
            messages.map((message) => (
              <View 
              key={message._id}
                style={{
                  paddingVertical: 9, 
                  paddingHorizontal: 20, 
                  marginVertical: 2,
                }}
                onPress={() => navigation.navigate('ChatRoom')}
              >
                <View 
                  style={{
                    borderBottomLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: message.user.name === 'React Native' ? 1 : 30,
                    borderTopLeftRadius: message.user.name === 'React Native' ? 30 : 2,
                    marginLeft: message.user.name === 'React Native' ? 60 : 2,
                    marginRight: message.user.name === 'React Native' ? 1 : 60,
                    paddingVertical: 15,
                    paddingHorizontal: 20, 
                    backgroundColor: message.user.name === 'React Native' ? '#e7e7e7' : '#000'
                  }}>
                  <Text style={{ 
                    fontFamily: 'Poppins',
                    fontSize: 15, 
                    color: message.user.name === 'React Native' ? 'black' : 'white' 
                  }}>
                    {message.text}
                  </Text> 
                </View>
              </View>
            ))
          }
        </ScrollView>

        <View>
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
                <View style={{ width: '100%'}}>
                  <TextInput
                    style={{
                      borderRadius: 40, 
                      marginRight: 20, 
                      borderWidth: 2, 
                      borderColor: 'gray', 
                      paddingVertical: 10, 
                      paddingHorizontal: 15
                    }}
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