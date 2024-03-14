import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SCREEN } from '../utils/constants';
import XIcon from './icons/X';

export default function SideNavigation({
  links,
  activeView,
  changeView,
  closeNav,
}) {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#191919',
        width: SCREEN.width,
        height: SCREEN.height,
        marginTop: StatusBar.currentHeight,
        zIndex: 100,
      }}
    >
      <View
        style={{
          paddingHorizontal: 35,
          paddingVertical: 25,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: '#FFFFFF',
            fontWeight: 'bold',
          }}
        >
          Menú
        </Text>
        <TouchableOpacity onPress={() => closeNav()}>
          <XIcon />
        </TouchableOpacity>
      </View>
      <View style={{ borderTopColor: '#313131', borderTopWidth: 0.5 }}>
        {links.map((link, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                paddingHorizontal: 35,
                paddingVertical: 20,
                borderBlockEndColor: '#313131',
                borderBottomWidth: 0.5,
              }}
              onPress={() => changeView(link.view)}
            >
              <Text
                style={{
                  color: link.view === activeView ? '#FFFFFF' : '#5D5D5D',
                  fontSize: 20,
                }}
              >
                {link.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
