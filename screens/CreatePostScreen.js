import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const CreatePostScreen = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState(null);

  const selectImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setPhoto(source);
      }
    });
  };

  const createPost = async () => {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('title', title);
    formData.append('content', content);

    if (photo) {
      formData.append('file', {
        name: photo.uri.split('/').pop(),
        type: 'image/png', // You can adjust this type based on your file type
        uri: photo.uri,
      });
    }

    try {
      const response = await fetch('http://localhost:3000/api/posts/createPost', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert('Success', `Post created with ID: ${result.id}`);
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong!');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>User ID:</Text>
      <TextInput
        value={userId}
        onChangeText={setUserId}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Title:</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Text>Content:</Text>
      <TextInput
        value={content}
        onChangeText={setContent}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
      />
      <Button title="Select Image" onPress={selectImage} />
      {photo && (
        <Image source={photo} style={{ width: 100, height: 100, marginVertical: 20 }} />
      )}
      <Button title="Create Post" onPress={createPost} />
    </View>
  );
};

export default CreatePostScreen;