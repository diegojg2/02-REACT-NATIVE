import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <Text style={styles.subtitle}>Mi primera pantalla</Text>
      <Text style={styles.subtitle2}>Curso 2026/27</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26323d',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    marginTop: 15,
    fontSize: 16,
    color: '#64748b',
  },
  subtitle2: {
    marginTop: 15,
    fontSize: 16,
    color: '#62c7f7',
    fontWeight: 'bold',
  },
});
