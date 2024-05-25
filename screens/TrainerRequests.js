import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const TrainerRequests = ({ route }) => {
  const { trainerId } = route.params;
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(`http://your-backend-url/trainer-requests/${trainerId}`);
        const data = await response.json();
        setRequests(data.requests);
      } catch (error) {
        console.error("Failed to retrieve trainer requests:", error);
      }
    };

    fetchRequests();
  }, []);

  const acceptRequest = async (userId) => {
    try {
      await fetch('http://your-backend-url/accept-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          trainer_id: trainerId,
        }),
      });
      alert('Coaching request accepted successfully.');
    } catch (error) {
      console.error("Failed to accept coaching request:", error);
    }
  };

  return (
    <View>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>User ID: {item.user_id}</Text>
            <Button title="Accept Request" onPress={() => acceptRequest(item.user_id)} />
          </View>
        )}
      />
    </View>
  );
};

export default TrainerRequests;
