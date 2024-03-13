import { View, TouchableOpacity, StatusBar } from 'react-native';
import HomeView from './views/Home';

const SCREENS = {
  home: <HomeView />,
};

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
      }}
    >
      {SCREENS.home}
    </View>
  );
}
