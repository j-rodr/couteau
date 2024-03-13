import { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { tryCatch } from '../utils/core';
import { SCREEN } from '../utils/constants';

const imageStyles = {
  width: 180,
  height: 180,
  borderRadius: 8,
  marginHorizontal: 'auto',
  marginVertical: 25,
};

const IMAGE_MAPPINGS = {
  joven: (
    <Image
      style={imageStyles}
      source={require('../assets/images/young-man.png')}
    />
  ),
  adulto: (
    <Image
      style={imageStyles}
      source={require('../assets/images/adult-woman.jpg')}
    />
  ),
  anciano: (
    <Image
      style={imageStyles}
      source={require('../assets/images/older-man.jpg')}
    />
  ),
};

function getAgeAdjective(age) {
  if (age <= 25) return 'joven';
  else if (age <= 55) return 'adulto';
  else return 'anciano';
}

export default function AgeView() {
  const [age, setAge] = useState();
  const [name, setName] = useState();
  const [requiredError, setRequiredError] = useState();
  const [resultIsVisible, setResultIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAgePrediction = async () => {
    tryCatch(
      async () => {
        setResultIsVisible(false);
        setLoading(true);

        const response = await fetch(`https://api.agify.io/?name=${name}`);
        const json = await response.json();

        if ('age' in json) {
          setAge(json.age);
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
        Predictor de edad
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
      {age === null && (
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
            getAgePrediction();
          }
        }}
      >
        <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 18 }}>
          Predecir
        </Text>
      </TouchableOpacity>
      {resultIsVisible && !loading && (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              display: 'flex',
              fontSize: 20,
              marginTop: 30,
              paddingHorizontal: 20,
              textAlign: 'center',
            }}
          >
            Su edad estimada es: {age}
          </Text>

          {IMAGE_MAPPINGS[getAgeAdjective(age)]}
          <Text style={{ fontSize: 18 }}>
            Usted es un {getAgeAdjective(age)}
          </Text>
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
