import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';


const TrainerList = ({ navigation }) => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await fetch('http://localhost:3000/trainers');
        const data = await response.json();
        setTrainers(data.trainers);
      } catch (error) {
        console.error("Failed to retrieve trainer list:", error);
      }
    };

    fetchTrainers();
  }, []);

  const requestCoaching = async (trainerId) => {
    try {
      await fetch('http://localhost:3000/coaching-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: 1, // Replace with actual user ID
          trainer_id: trainerId,
        }),
      });
      alert('Coaching request sent successfully.');
    } catch (error) {
      console.error("Failed to send coaching request:", error);
    }
  };

  return (
    <View>
      <FlatList
        data={trainers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Request Coaching" onPress={() => requestCoaching(item.id)} />
            <Button title="View Requests" onPress={() => navigation.navigate('TrainerRequests', { trainerId: item.id })} />
          </View>
        )}
      />
    </View>
  );
};

export default TrainerList;
