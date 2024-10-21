import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const AddUser = () => {
    const [name, setName] = useState('');

    const handleAddUser = async () => {
        try {
            const response = await axios.post('http://10.0.2.2:8080/api/users', { name });
            Alert.alert('Success', `User ${response.data.name} added!`);
            setName(''); // Clear input field
        } catch (error) {
            Alert.alert('Error', 'Could not add user. Please try again.');
            console.error(error);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Enter User Name"
                value={name}
                onChangeText={setName}
                style={{ marginBottom: 20, borderBottomWidth: 1 }}
            />
            <Button title="Add User" onPress={handleAddUser} />
        </View>
    );
};

export default AddUser;
