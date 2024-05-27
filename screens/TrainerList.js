import React, { useEffect, useState } from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/getTrainers'); // 실제 API URL로 변경
      const data = await response.json();
      if (response.ok) {
        setTrainers(data.trainers);
      } else {
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Failed to fetch trainers:', error);
      Alert.alert('Error', 'Failed to fetch trainers.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={trainers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.trainerItem}>
            <Text style={styles.trainerName}>{item.name}</Text>
            <Text style={styles.trainerDetail}>Experience: {item.experience}</Text>
            <Text style={styles.trainerDetail}>Specialty: {item.specialty}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#D7F2EC',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7F2EC',
  },
  trainerItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  trainerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  trainerDetail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default TrainerList;
