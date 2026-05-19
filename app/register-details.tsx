import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Image } from 'expo-image';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

const { width, height } = Dimensions.get('window');

export default function RegisterDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Lấy email từ màn hình trước truyền sang (nếu có), mặc định tạm thời để hiển thị
  const emailFromPrevScreen = (params.email as string) || 'email@gmail.com';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [memberType, setMemberType] = useState(''); // Để trống theo yêu cầu

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

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logoImage}
            contentFit="contain"
          />
        </View>

        {/* Form đăng ký chi tiết */}
        <View style={styles.formContainer}>
          
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>Đăng ký</Text>
            <Text style={styles.subtitle}>
              Chúng tôi cần thêm thông tin{'\n'}của bạn
            </Text>
          </View>

          {/* Hàng Tên và Họ */}
          <View style={styles.nameRow}>
            <View style={[styles.inputWrapper, styles.nameInputWrapper]}>
              <TextInput
                style={[styles.input, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="Tên"
                placeholderTextColor="#64748B"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            <View style={[styles.inputWrapper, styles.nameInputWrapper]}>
              <TextInput
                style={[styles.input, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="Họ"
                placeholderTextColor="#64748B"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/* Email input (Disabled) */}
          <View style={styles.inputGroup}>
            <View style={[styles.inputWrapper, styles.disabledInputWrapper]}>
              <TextInput
                style={[styles.input, styles.disabledInput, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                value={emailFromPrevScreen}
                editable={false} // Không cho phép sửa đổi
              />
            </View>
          </View>

          {/* Passcode input */}
          <View style={styles.inputGroup}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="Passcode"
                placeholderTextColor="#64748B"
                value={passcode}
                onChangeText={setPasscode}
                secureTextEntry
              />
            </View>
          </View>

          {/* Confirm passcode input */}
          <View style={styles.inputGroup}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="Confirm passcode"
                placeholderTextColor="#64748B"
                value={confirmPasscode}
                onChangeText={setConfirmPasscode}
                secureTextEntry
              />
            </View>
          </View>

          {/* Chọn loại thành viên */}
          <View style={styles.memberTypeGroup}>
            <Text style={styles.inputLabel}>CHỌN LOẠI THÀNH VIÊN</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder=""
                placeholderTextColor="#64748B"
                value={memberType}
                onChangeText={setMemberType}
                editable={true}
              />
            </View>
          </View>

        </View>
      </ScrollView>

      {/* Footer - Cố định ở dưới cùng */}
      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.finishButton}
          activeOpacity={0.85}
          onPress={() => {
            // TODO: xử lý hoàn thành đăng ký
          }}
        >
          <Text style={styles.finishButtonText}>Hoàn thành</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push('/login')}
          style={styles.backLink}
        >
          <Text style={styles.linkText}>Quay lại đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },

  // Logo
  logoContainer: {
    width: '100%',
    height: height * 0.28,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: height * 0.05,
  },
  logoImage: {
    width: 360,
    height: 240,
  },

  // Form
  formContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 40,
  },
  headerTextContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#212943',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#1A2E5A',
    textAlign: 'center',
    lineHeight: 24,
  },

  // Input chung
  inputGroup: {
    width: '100%',
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1A2E5A',
  },
  disabledInputWrapper: {
    backgroundColor: '#E2E8F0', // Màu nền đậm hơn chút để thể hiện trạng thái disable
  },
  disabledInput: {
    color: '#64748B', // Màu chữ nhạt hơn
  },

  // Hàng Tên và Họ
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    gap: 16, // Thêm khoảng cách giữa 2 ô
  },
  nameInputWrapper: {
    flex: 1,
  },

  // Loại thành viên
  memberTypeGroup: {
    width: '100%',
    marginBottom: 16,
    marginTop: 8,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#8898AA',
    letterSpacing: 1.1,
    marginBottom: 8,
    marginLeft: 4,
  },

  // Footer
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 24, // Dành khoảng trống an toàn cho tai thỏ/bottom bar
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F2F4F7', // Thêm đường viền mờ phân cách với phần cuộn
  },
  finishButton: {
    backgroundColor: '#6084FA',
    borderRadius: 8,
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  backLink: {
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#4A5568',
  },
});
