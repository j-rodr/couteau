import { Text, View, Image } from 'react-native';
import { SCREEN } from '../../utils/constants';

export default function HomeView() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: SCREEN.height - 200,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#191919',
        }}
      >
        Tarea 6 (Couteau)
      </Text>
      <Image
        style={{ width: 300, height: 300 }}
        source={require('../../assets/images/toolkit.jpg')}
      />
      <Text style={{ fontSize: 18, color: '#191919' }}>
        ¡Bienvenido a la caja de herramientas!
      </Text>
    </View>
  );
}
