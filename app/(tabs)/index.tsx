import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/screens/index.styles';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* Ảnh nền toàn màn hình - bạn thêm ảnh vào đây */}
      {/* Thay null thành require('@/assets/images/tên-ảnh.png') */}
      <ImageBackground
        source={require('@/assets/images/backGround-login.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>

          {/* Ảnh minh họa (nhà + logo + text) - bạn tự thêm ảnh */}
          {/* Thay null thành require('@/assets/images/tên-ảnh.png') */}
          <Image
            source={null}
            style={styles.mainImage}
            contentFit="contain"
          />

          {/* Nút Bắt đầu */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.85}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.buttonText}>Bắt đầu</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}
