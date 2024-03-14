import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import HomeView from './components/views/Home';
import { SCREEN, HORIZONTAL_SPACING } from './utils/constants';
import HamburgerMenuIcon from './components/icons/HamburgerMenu';
import GenderView from './components/views/Gender';
import AgeView from './components/views/Age';
import UniversitiesView from './components/views/Universities';
import WeatherView from './components/views/Weather';
import WordpressView from './components/views/Wordpress';

const SCREENS = {
  home: <HomeView />,
  gender: <GenderView />,
  age: <AgeView />,
  universities: <UniversitiesView />,
  weather: <WeatherView />,
  wordpress: <WordpressView />,
};

export default function App() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: StatusBar.currentHeight,
      }}
    >
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
      <View
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {SCREENS.wordpress}
      </View>
    </ScrollView>
  );
}
