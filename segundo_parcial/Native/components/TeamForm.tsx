import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const TeamForm = ({ navigation }: any) => {
  const [teamName, setTeamName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    if (!teamName) {
      setError('El nombre del equipo es obligatorio.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://api.example.com/teams', {
        name: teamName,
      });
      setLoading(false);
      navigation.navigate('TeamDetails', { teamId: response.data.id });
    } catch (error) {
      setLoading(false);
      setError('Hubo un error al crear el equipo.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Equipo</Text>
      <TextInput
        placeholder="Nombre del equipo"
        value={teamName}
        onChangeText={setTeamName}
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Crear equipo" onPress={handleSubmit} disabled={loading} />
      {loading && <Text style={styles.loading}>Cargando...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  loading: {
    marginTop: 10,
    color: 'blue',
  },
});

export default TeamForm;