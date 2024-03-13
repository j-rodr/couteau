import { Text, View, ActivityIndicator, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { tryCatch } from '../utils/core';
import { SCREEN } from '../utils/constants';

const WEATHER_API_KEY = '620a6278d00444faa4f221810241303';

export default function WeatherView() {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);
  const now = new Date();

  useEffect(() => {
    const getWeather = async () => {
      tryCatch(
        async () => {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=Dominican+Republic`
          );
          const json = await response.json();

          if ('current' in json) {
            setWeather({
              description: json.current.condition.text,
              imageUrl: json.current.condition.icon,
              degreesCelsius: json.current.temp_c,
            });
          }
        },
        () => {
          setTimeout(() => setLoading(false), 1000);
        }
      );
    };

    getWeather();
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: SCREEN.height - 200,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#191919',
          textAlign: 'center',
          marginBottom: 25,
        }}
      >
        Clima
      </Text>
      {!loading && (
        <View
          style={{
            paddingTop: 18,
            paddingBottom: 22,
            paddingHorizontal: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#F3F3F3',
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 25,
              width: SCREEN.width - 130,
            }}
          >
            <View
              style={{
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {weather?.description}
              </Text>
              <Text style={{ fontSize: 30 }}>{weather?.degreesCelsius} °C</Text>
            </View>

            <Image
              style={{ width: 90, height: 90 }}
              source={{
                uri: `https:${weather?.imageUrl}`,
              }}
            />
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ color: '#707070', fontSize: 16 }}>
              República Dominicana
            </Text>
            <Text style={{ color: '#707070', fontSize: 16 }}>{`${String(
              now.getUTCDate()
            ).padStart(2, '0')}/${String(now.getUTCMonth() + 1).padStart(
              2,
              '0'
            )}/${String(now.getUTCFullYear()).padStart(2, '0')}`}</Text>
          </View>
        </View>
      )}
      {loading && (
        <ActivityIndicator
          style={{ marginTop: 25 }}
          color='#191919'
          size='large'
        />
      )}
    </View>
  );
}
