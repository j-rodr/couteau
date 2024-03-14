import { Text, View, Image } from 'react-native';

export default function AboutView() {
  return (
    <View
      style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 60 }}
    >
      <Image
        style={{
          width: 140,
          height: 140,
          borderRadius: 20,
        }}
        source={require('../../assets/images/profile-round.jpg')}
      />
      <View style={{ justifyContent: 'center', gap: 10, paddingTop: 25 }}>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
          José Gabriel Rodríguez Bidó
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 17 }}>
          rodriguezbidojosegabriel@gmail.com
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 17 }}>849-458-2727</Text>
      </View>
    </View>
  );
}
