import { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { tryCatch } from '../../utils/core';
import { SCREEN } from '../../utils/constants';

const GENDER_SPANISH_MAPPINGS = {
  female: 'Femenino',
  male: 'Masculino',
};

export default function GenderView() {
  const [gender, setGender] = useState();
  const [name, setName] = useState();
  const [requiredError, setRequiredError] = useState();
  const [resultIsVisible, setResultIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const getGenderPrediction = async () => {
    tryCatch(
      async () => {
        setResultIsVisible(false);
        setLoading(true);

        const response = await fetch(`https://api.genderize.io/?name=${name}`);
        const json = await response.json();

        if ('gender' in json) {
          setGender(json.gender);
          setResultIsVisible(true);
        }
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
        Predictor de género
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
        placeholder='Digite su nombre'
        onChangeText={(name) => {
          setResultIsVisible(false);
          if (name !== '') setName(name);
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
      {gender === null && (
        <Text
          style={{
            color: '#DC2626',
            fontSize: 16,
            textAlign: 'center',
            marginBottom: 25,
          }}
        >
          No reconozco ese nombre.
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
          if (!name) {
            setRequiredError('Debe proporcionar un nombre.');
          } else {
            setRequiredError();
            getGenderPrediction();
          }
        }}
      >
        <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 18 }}>
          Predecir
        </Text>
      </TouchableOpacity>
      {resultIsVisible && !loading && (
        <Text
          style={{
            fontSize: 20,
            marginTop: 30,
            paddingHorizontal: 20,
            textAlign: 'center',
          }}
        >
          El género de {name} es: {GENDER_SPANISH_MAPPINGS[gender]}
          {gender === 'female' ? '  ♀️🚺💃🏾' : '  🚹♂️🧔🏾‍♂️'}
        </Text>
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
