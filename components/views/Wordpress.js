import { useEffect, useState } from 'react';
import {
  Text,
  View,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SCREEN } from '../../utils/constants';
import { tryCatch } from '../../utils/core';

export default function WordPressView() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const postsAreVisible = posts && !loading;

  useEffect(() => {
    setLoading(true);

    const getPosts = async () => {
      tryCatch(
        async () => {
          const response = await fetch(
            `https://boingboing.net/wp-json/wp/v2/posts`
          );

          setPosts(await response.json());
        },
        () => setTimeout(() => setLoading(false), 1000)
      );
    };

    getPosts();
  }, []);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 120,
        minHeight: SCREEN.height - 200,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#191919',
          textAlign: 'center',
        }}
      >
        Publicaciones de BoingBoing
      </Text>
      <Text style={{ marginBottom: 25, marginTop: 12, fontSize: 16 }}>
        https://boingboing.net/
      </Text>
      {!postsAreVisible && (
        <ActivityIndicator
          style={{ marginTop: 25 }}
          color='#191919'
          size='large'
        />
      )}
      {postsAreVisible && (
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
            <Text style={{ fontSize: 16, paddingTop: 10 }}>
              {`${String(new Date(posts[0].date).getUTCDate()).padStart(
                2,
                '0'
              )}/${String(new Date(posts[0].date).getUTCMonth() + 1).padStart(
                2,
                '0'
              )}/${String(new Date(posts[0].date).getUTCFullYear()).padStart(
                2,
                '0'
              )}`}
            </Text>
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
            <Text style={{ fontSize: 16, paddingTop: 10 }}>
              {`${String(new Date(posts[1].date).getUTCDate()).padStart(
                2,
                '0'
              )}/${String(new Date(posts[1].date).getUTCMonth() + 1).padStart(
                2,
                '0'
              )}/${String(new Date(posts[1].date).getUTCFullYear()).padStart(
                2,
                '0'
              )}`}
            </Text>
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
            <Text style={{ fontSize: 16, paddingTop: 10 }}>
              {`${String(new Date(posts[1].date).getUTCDate()).padStart(
                2,
                '0'
              )}/${String(new Date(posts[1].date).getUTCMonth() + 1).padStart(
                2,
                '0'
              )}/${String(new Date(posts[1].date).getUTCFullYear()).padStart(
                2,
                '0'
              )}`}
            </Text>
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
