import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.greeting}>Hola,</Text>
      <Text style={styles.user}>Alex 🚀</Text>


      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>PROYECTOS COMPLETADOS HOY</Text>
        <Text style={styles.steps}>3</Text>
        <Text style={styles.stepsLabel}>de 5 objetivos</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>60% del día completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Productividad de hoy</Text>

      <View style={styles.grid}>
        <Metric icon="⏰" value="4.5h" label="Enfoque" />
        <Metric icon="✅" value="12" label="Tareas" />
        <Metric icon="💪" value="8/10" label="Energía" />
        <Metric icon="🎯" value="85%" label="Exactitud" />
      </View>

      <Text style={styles.sectionTitle}>Historial reciente</Text>
      
      <RecentActivity title="Revisar documentos" time="Hace 15 min" status="✓" />
      <RecentActivity title="Diseñar mockups" time="Hace 45 min" status="✓" />
      <RecentActivity title="Reunión de equipo" time="Hace 2h" status="◆" />
    </ScrollView>
  );
}

function Metric({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricIcon}>{icon}</Text>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}


function RecentActivity({ title, time, status }: { title: string; time: string; status: string }) {
  return (
    <View style={styles.activity}>
      <View style={styles.activityContent}>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityTime}>{time}</Text>
      </View>
      <Text style={styles.activityStatus}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#6366f1',
    fontSize: 17,
    fontWeight: '500',
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1e1b4b',
  },
  goalCard: {
    backgroundColor: '#6366f1',
    padding: 24,
    borderRadius: 20,
    marginBottom: 24,
  },
  goalLabel: {
    color: '#e0e7ff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#e0e7ff',
    marginTop: 4,
  },
  progressBackground: {
    height: 12,
    backgroundColor: '#4f46e5',
    borderRadius: 6,
    marginTop: 20,
    overflow: 'hidden',
  },
  progress: {
    width: '60%',
    height: '100%',
    backgroundColor: '#a78bfa',
  },
  percentage: {
    color: '#e0e7ff',
    marginTop: 12,
    fontSize: 14,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 14,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e1b4b',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  metricCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
    marginRight: '4%',
    borderLeftWidth: 4,
    borderLeftColor: '#6366f1',
  },
  metricIcon: {
    fontSize: 28,
  },
  metricValue: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e1b4b',
  },
  metricLabel: {
    marginTop: 4,
    color: '#64748b',
    fontSize: 13,
  },
  activity: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 3,
    borderLeftColor: '#06b6d4',
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontWeight: '600',
    color: '#1e1b4b',
  },
  activityTime: {
    marginTop: 4,
    color: '#94a3b8',
    fontSize: 12,
  },
  activityStatus: {
    fontSize: 18,
    color: '#06b6d4',
    fontWeight: 'bold',
  },
});
    marginBottom: 10,
  },
  activityTitle: {
    fontWeight: 'bold',
  },
  activityDetail: {
    marginTop: 4,
    color: '#64748b',
  },
});