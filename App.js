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
import WordPressView from './components/views/WordPress';
import SideNavigation from './components/SideNavigation';
import { useState } from 'react';
import AboutView from './components/views/About';

const SCREENS = {
  home: <HomeView />,
  gender: <GenderView />,
  age: <AgeView />,
  universities: <UniversitiesView />,
  weather: <WeatherView />,
  wordpress: <WordPressView />,
  about: <AboutView />,
};

const NAV_ITEMS = [
  {
    label: 'Inicio',
    view: 'home',
  },
  {
    label: 'Predictor de género',
    view: 'gender',
  },
  {
    label: 'Predictor de edad',
    view: 'age',
  },
  {
    label: 'Universidades',
    view: 'universities',
  },
  {
    label: 'Clima',
    view: 'weather',
  },
  {
    label: 'WordPress',
    view: 'wordpress',
  },
  {
    label: 'Contacto',
    view: 'about',
  },
];

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [navIsVisible, setNavIsVisible] = useState(false);

  const changeView = (newView) => {
    setActiveView(newView);
    setNavIsVisible(false);
  };

  const closeNav = () => {
    setNavIsVisible(false);
  };

  return (
    <View style={{ paddingTop: StatusBar.currentHeight }}>
      {navIsVisible && (
        <SideNavigation
          links={NAV_ITEMS}
          activeView={activeView}
          changeView={changeView}
          closeNav={closeNav}
        />
      )}
      {!navIsVisible && (
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
            {NAV_ITEMS.find((item) => item.view === activeView).label}
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
            onPress={() => setNavIsVisible(true)}
          >
            <HamburgerMenuIcon />
          </TouchableOpacity>
        </View>
      )}
      <ScrollView>{!navIsVisible && SCREENS[activeView]}</ScrollView>
    </View>
  );
}
