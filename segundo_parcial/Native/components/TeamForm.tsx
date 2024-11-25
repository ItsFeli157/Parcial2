import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

// Definir tipos para el estado del formulario
interface TeamFormProps {
  navigation: any;
}

const TeamForm: React.FC<TeamFormProps> = ({ navigation }) => {
  const [teamName, setTeamName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleReset = () => {
    setTeamName('');
    setDescription('');
  };

  const handleSubmit = async () => {
    if (!teamName || !description) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }
    try {
      await axios.post('http://localhost:3000/api/teams', { teamName, description });
      Alert.alert('Éxito', 'Equipo creado correctamente.');
      navigation.navigate('TeamDetails'); // Navegar a otra pantalla
    } catch (error) {
      Alert.alert('Error', 'No se pudo crear el equipo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre del Equipo</Text>
      <TextInput
        style={styles.input}
        value={teamName}
        onChangeText={setTeamName}
        placeholder="Escribe el nombre del equipo"
      />
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Escribe una descripción"
      />
      <View style={styles.buttonContainer}>
        <Button title="Restablecer" onPress={handleReset} color="#FF6347" />
        <Button title="Guardar" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TeamForm;
