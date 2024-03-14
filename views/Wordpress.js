import { useEffect, useState } from 'react';
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { SCREEN } from '../utils/constants';

export default function WordpressView() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://boingboing.net/wp-json/wp/v2/posts`
      );

      setPosts(await response.json());
    };

    getPosts();
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 50,
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
        Publicaciones de BoingBoing
      </Text>
      {posts && (
        <View style={{ gap: 20 }}>
          <View
            style={{
              padding: 20,
              width: SCREEN.width - 70,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#F3F3F3',
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 17, color: '#696969' }}>Título</Text>
              <Text style={{ fontSize: 20 }}>
                {posts[0].yoast_head_json.title}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 17, color: '#696969', marginBottom: 5 }}>
                Resumen
              </Text>
              <Text style={{ fontSize: 16 }}>
                {posts[0].yoast_head_json.description}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => Linking.openURL(posts[0].guid.rendered)}
            >
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 14,
                  marginBottom: 3,
                  color: '#2563EB',
                }}
              >
                Ver publicación
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 20,
              width: SCREEN.width - 70,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#F3F3F3',
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 17, color: '#696969' }}>Título</Text>
              <Text style={{ fontSize: 20 }}>
                {posts[1].yoast_head_json.title}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 17, color: '#696969', marginBottom: 5 }}>
                Resumen
              </Text>
              <Text style={{ fontSize: 16 }}>
                {posts[1].yoast_head_json.description}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => Linking.openURL(posts[1].guid.rendered)}
            >
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 14,
                  marginBottom: 3,
                  color: '#2563EB',
                }}
              >
                Ver publicación
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              padding: 20,
              width: SCREEN.width - 70,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#F3F3F3',
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 17, color: '#696969' }}>Título</Text>
              <Text style={{ fontSize: 20 }}>
                {posts[2].yoast_head_json.title}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 17, color: '#696969', marginBottom: 5 }}>
                Resumen
              </Text>
              <Text style={{ fontSize: 16 }}>
                {posts[2].yoast_head_json.description}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => Linking.openURL(posts[2].guid.rendered)}
            >
              <Text
                style={{
                  fontSize: 17,
                  marginTop: 14,
                  marginBottom: 3,
                  color: '#2563EB',
                }}
              >
                Ver publicación
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
