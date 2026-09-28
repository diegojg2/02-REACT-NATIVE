import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Paso 1: Bloques visuales - Saludo */}
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Laura</Text>

      {/* Paso 2: Tarjeta de saldo destacada */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>4.280,32 €</Text>
        <Text style={styles.account}>ES00 •••• •••• 7821</Text>
      </View>

      {/* Paso 3: Fila de acciones rápidas */}
      <View style={styles.actions}>
        <Action icon="📤" label="Enviar" />
        <Action icon="📥" label="Solicitar" />
        <Action icon="⋯" label="Más" />
      </View>

      {/* Paso 6: Reutilizar Movement varias veces */}
      <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      <Movement title="Supermercado" date="Hoy" amount="-42,80 €" />
      <Movement title="Cafetería" date="Ayer" amount="-3,20 €" />
      <Movement title="Nómina" date="20 septiembre" amount="+2.340 €" />
      <Movement title="Electricidad" date="18 septiembre" amount="-74,20 €" />
      
      {/* Movimiento positivo adicional: Se renderiza igual que los demás.
          El componente Movement detecta si el amount empieza con + o -
          y lo colorea automáticamente. Sin cambiar la estructura del componente. */}
      <Movement title="Freelance" date="15 septiembre" amount="+285 €" />
    </ScrollView>
  );
}

// Paso 4: Diseñar un movimiento
// Paso 5: Extraer Movement a componente reutilizable
type MovementProps = {
  title: string;
  date: string;
  amount: string;
};

function Movement({ title, date, amount }: MovementProps) {
  const isPositive = amount.startsWith('+');
  
  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDate}>{date}</Text>
      </View>
      <Text style={[styles.amount, isPositive ? styles.positive : styles.negative]}>
        {amount}
      </Text>
    </View>
  );
}

// Componente para acciones rápidas
type ActionProps = {
  icon: string;
  label: string;
};

function Action({ icon, label }: ActionProps) {
  return (
    <View style={styles.actionItem}>
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  hello: {
    marginTop: 60,
    color: '#64748b',
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  balanceCard: {
    backgroundColor: '#111827',
    borderRadius: 22,
    padding: 24,
    marginBottom: 24,
  },
  balanceLabel: {
    color: '#cbd5e1',
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 8,
  },
  account: {
    color: '#94a3b8',
    marginTop: 28,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 12,
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontWeight: 'bold',
  },
  movementDate: {
    marginTop: 3,
    color: '#94a3b8',
  },
  amount: {
    fontWeight: 'bold',
  },
  positive: {
    color: '#16a34a',
  },
  negative: {
    color: '#dc2626',
  },
});