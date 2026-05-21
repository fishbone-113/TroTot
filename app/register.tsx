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
import { styles } from '@/styles/screens/register.styles';

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

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

        {/* Khoảng ảnh logo / minh hoạ */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logoImage}
            contentFit="contain"
          />
        </View>

        {/* Form đăng ký */}
        <View style={styles.formContainer}>

          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>Đăng ký</Text>
            <Text style={styles.subtitle}>XÁC NHẬN QUA EMAIL</Text>
          </View>

          {/* Email input */}
          <View style={styles.inputGroup}>
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

          {/* Mã xác nhận & Nút Lấy mã */}
          <View style={styles.codeRow}>
            <View style={[styles.inputWrapper, styles.codeInputWrapper]}>
              <TextInput
                style={[styles.input, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="***"
                placeholderTextColor="#A0AEC0"
                value={code}
                onChangeText={setCode}
                keyboardType="number-pad"
              />
            </View>
            <TouchableOpacity
              style={styles.getCodeButton}
              activeOpacity={0.8}
            >
              <Text style={styles.getCodeButtonText}>Lấy mã</Text>
            </TouchableOpacity>
          </View>

          {/* Nút Xác nhận */}
          <TouchableOpacity
            style={styles.confirmButton}
            activeOpacity={0.85}
            onPress={() => {
              router.push({
                pathname: '/register-details',
                params: { email: email }
              });
            }}
          >
            <Text style={styles.confirmButtonText}>Xác nhận</Text>
          </TouchableOpacity>

          {/* Footer - Được đẩy xuống dưới cùng */}
          <View style={styles.footerContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.back()}
              style={styles.backLink}
            >
              <Text style={styles.linkText}>Quay lại đăng nhập</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
