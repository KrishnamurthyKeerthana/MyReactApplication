import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

   useEffect(() => {
          const fetchUsers = async () => {
              try {
                  const response = await axios.get('http://10.0.2.2:8080/api/users');
                  setUsers(response.data);
              } catch (error) {
                  setError('Error fetching users');
              } finally {
                  setLoading(false);
              }
          };

          fetchUsers();
   }, []);

   const renderItem = ({ item }) => (
          <View style={styles.item}>
              <Text style={styles.title}>ID: {item.id}</Text>
              <Text style={styles.title}>Name: {item.name}</Text>
          </View>
   );

   if (loading) {
          return <ActivityIndicator size="large" color="#0000ff" />;
   }

   if (error) {
          return <Text>{error}</Text>;
   }

   return (
          <FlatList
              data={users}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
          />
   );
};

const styles = StyleSheet.create({
    item: {
          padding: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
    },
    title: {
          fontSize: 18,
    },
});

export default UserList;



