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
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 25,
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#F3F3F3',
          }}
        >
          <View
            style={{
              gap: 3,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {weather?.description}
            </Text>
            <Text style={{ fontSize: 30 }}>{weather?.degreesCelsius} °C</Text>
            <Text>{`${String(now.getUTCDate()).padStart(2, '0')}/${String(
              now.getUTCMonth() + 1
            ).padStart(2, '0')}/${String(now.getUTCFullYear()).padStart(
              2,
              '0'
            )}`}</Text>
          </View>

          <Image
            style={{ width: 90, height: 90 }}
            source={{
              uri: `https:${weather?.imageUrl}`,
            }}
          />
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
