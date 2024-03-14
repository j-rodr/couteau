import { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { tryCatch } from '../../utils/core';
import {
  COUNTRY_NAMES_SPANISH_TO_ENGLISH,
  SCREEN,
} from '../../utils/constants';

export default function UniversitiesView() {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState();
  const [requiredError, setRequiredError] = useState();
  const [resultIsVisible, setResultIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notFoundError, setNotFoundError] = useState(false);

  const getUniversities = async () => {
    tryCatch(
      async () => {
        setNotFoundError(false);
        setResultIsVisible(false);
        setLoading(true);

        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${
            COUNTRY_NAMES_SPANISH_TO_ENGLISH[country.toLowerCase()] ?? country
          }`
        );
        const universities = await response.json();

        if (universities.length !== 0) {
          setUniversities(universities);
          setResultIsVisible(true);
          setNotFoundError(false);
        } else setNotFoundError(true);
      },
      () => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    );
  };

  return (
    <View
      style={{
        width: SCREEN.width - 30,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: SCREEN.height - 200,
        paddingVertical: 40,
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
        Universidades de un país
      </Text>
      <TextInput
        style={{
          width: SCREEN.width - 100,
          borderColor: '#F3F3F3',
          borderWidth: 1,
          borderRadius: 5,
          fontSize: 17,
          paddingHorizontal: 20,
          paddingVertical: 16,
          marginBottom: 30,
        }}
        placeholder='Digite un país (en inglés o español)'
        onChangeText={(country) => {
          setResultIsVisible(false);
          if (country !== '') setCountry(country);
        }}
      />
      {requiredError && (
        <Text
          style={{
            color: '#DC2626',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 25,
          }}
        >
          Debe proporcionar un nombre.
        </Text>
      )}
      {notFoundError && (
        <Text
          style={{
            color: '#DC2626',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 25,
          }}
        >
          No se encontró universidades para este país.
        </Text>
      )}

      <TouchableOpacity
        style={{
          display: 'flex',
          backgroundColor: '#191919',
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 5,
          width: 'auto',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 'auto',
        }}
        onPress={() => {
          if (!country) {
            setRequiredError('Debe proporcionar un país.');
          } else {
            setRequiredError();
            getUniversities();
          }
        }}
      >
        <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 18 }}>
          Obtener universidades
        </Text>
      </TouchableOpacity>
      {resultIsVisible && !loading && (
        <View
          style={{
            justifyContent: 'center',
            display: 'flex',
            gap: 20,
            paddingTop: 30,
            paddingHorizontal: 15,
          }}
        >
          {universities.map((university, index) => (
            <View
              key={index}
              style={{
                borderColor: '#F3F3F3',
                borderRadius: 5,
                borderWidth: 1,
                padding: 10,
                display: 'flex',
                gap: 5,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {index + 1}. {university.name}
              </Text>
              <Text style={{ fontSize: 17 }}>
                Dominio: {university.domains[0]}
              </Text>
              <TouchableOpacity
                onPress={Linking.openURL(university.web_pages[0])}
              >
                <Text>{university.web_pages[0]}</Text>
              </TouchableOpacity>
            </View>
          ))}
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
