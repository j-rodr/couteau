import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SCREEN, HORIZONTAL_SPACING } from '../utils/constants';
import HamburgerMenuIcon from '../components/icons/HamburgerMenu';

export default function HomeView() {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: SCREEN.width,
          paddingHorizontal: HORIZONTAL_SPACING,
          paddingVertical: 18,
          backgroundColor: '#191919',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }}>
          Inicio
        </Text>
        <TouchableOpacity
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 14,
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            paddingVertical: 15,
            paddingHorizontal: 15,
            borderRadius: 5,
          }}
        >
          <HamburgerMenuIcon />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
          source={require('../assets/images/toolkit.jpg')}
        />
        <Text style={{ fontSize: 18, color: '#191919' }}>
          ¡Bienvenido a la caja de herramientas!
        </Text>
      </View>
    </>
  );
}
