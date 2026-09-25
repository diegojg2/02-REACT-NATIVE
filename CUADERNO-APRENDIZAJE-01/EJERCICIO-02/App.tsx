import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card2}>
        <Text style={styles.title2}>¡Bienvenido!</Text>
        <Text style={styles.subtitle2}>Diseño de interfaces con React Native</Text>
        <View style={styles.button2}>
          <Text style={styles.buttonText2}>COMENZAR</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Diseño de interfaces con React Native</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#bdbdbd',
    gap: 18,
  },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 18,
    color: '#000000',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ca8c06',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#f79400',
    padding: 15,
    borderRadius: 18,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card2: {
    backgroundColor: '#1e293b',
    padding: 30,
    borderRadius: 18,
    color: '#ffffff',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#facc15',
  },
  subtitle2: {
    marginTop: 10,
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  button2: {
    marginTop: 24,
    backgroundColor: '#facc15',
    padding: 15,
    borderRadius: 18,
  },
  buttonText2: {
    color: '#1e293b',
    textAlign: 'center',
    fontWeight: 'bold',
  },    
});