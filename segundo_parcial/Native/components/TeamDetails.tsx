import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const TeamDetails = ({ route }: any) => {
  const { teamId } = route.params;
  const [team, setTeam] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await axios.get(`https://api.example.com/teams/${teamId}`);
        setTeam(response.data);
        setLoading(false);
      } catch (error) {
        setError('No se pudo cargar la información del equipo.');
        setLoading(false);
      }
    };

    fetchTeamDetails();
  }, [teamId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Cargando...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Equipo</Text>
      <Text style={styles.teamName}>Nombre: {team.name}</Text>
      <Text style={styles.teamMembers}>Miembros: {team.members.length}</Text>
      <Text style={styles.teamMembers}>
        Miembros: {team.members.map((member: string, index: number) => (
          <Text key={index}>{member}{index < team.members.length - 1 ? ', ' : ''}</Text>
        ))}
      </Text>
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
  teamName: {
    fontSize: 18,
    marginBottom: 10,
  },
  teamMembers: {
    fontSize: 16,
  },
  error: {
    color: 'red',
  },
  loading: {
    color: 'blue',
  },
});

export default TeamDetails;