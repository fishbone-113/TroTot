import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/styles/screens/login.styles';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        {/* Khoảng ảnh logo / minh hoạ - bạn thêm ảnh vào đây */}
        {/* Thay null thành require('@/assets/images/tên-ảnh.png') */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logoImage}
            contentFit="contain"
          />
        </View>

        {/* Form đăng nhập */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>Đăng nhập</Text>

          {/* Email input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>EMAIL</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="email@gmail.com"
                placeholderTextColor="#A0AEC0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Mật khẩu input */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>MẬT KHẨU</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, styles.inputPassword, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="••••••••••"
                placeholderTextColor="#A0AEC0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.7}
              >
                <Ionicons
                  name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                  size={20}
                  color="#1A2E5A"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Nút Đăng Nhập */}
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.85}
            onPress={() => {
              router.replace('/(tabs)/home');
            }}
          >
            <Text style={styles.loginButtonText}>Đăng Nhập</Text>
          </TouchableOpacity>

          {/* Footer - Được đẩy xuống dưới cùng */}
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.registerButton}
              activeOpacity={0.85}
              onPress={() => router.push('/register')}
            >
              <Text style={styles.registerButtonText}>Tạo tài khoản</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push('/register')}
            >
              <Text style={styles.linkText}>Chưa có tài khoản?</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
