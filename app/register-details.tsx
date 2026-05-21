import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { commonStyles } from '@/styles/common';
import { styles } from '@/styles/screens/register-details.styles';
import { Colors } from '@/styles/theme';

const MEMBER_OPTIONS = [
  { label: 'Người thuê', value: 'tenant' },
  { label: 'Người cho thuê', value: 'landlord' },
];

export default function RegisterDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  // Lấy email từ màn hình trước truyền sang (nếu có), mặc định tạm thời để hiển thị
  const emailFromPrevScreen = (params.email as string) || 'email@gmail.com';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [memberType, setMemberType] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedLabel = MEMBER_OPTIONS.find((o) => o.value === memberType)?.label;

  return (
    <KeyboardAvoidingView
      style={commonStyles.whiteScreen}
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
            <View style={[commonStyles.inputWrapper, styles.nameInputWrapper]}>
              <TextInput
                style={[commonStyles.inputText, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="Tên"
                placeholderTextColor="#64748B"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            <View style={[commonStyles.inputWrapper, styles.nameInputWrapper]}>
              <TextInput
                style={[commonStyles.inputText, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="Họ"
                placeholderTextColor="#64748B"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/* Email input (Disabled) */}
          <View style={styles.inputGroup}>
            <View style={[commonStyles.inputWrapper, styles.disabledInputWrapper]}>
              <TextInput
                style={[commonStyles.inputText, styles.disabledInput, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                value={emailFromPrevScreen}
                editable={false} // Không cho phép sửa đổi
              />
            </View>
          </View>

          {/* Passcode input */}
          <View style={styles.inputGroup}>
            <View style={commonStyles.inputWrapper}>
              <TextInput
                style={[commonStyles.inputText, { outlineStyle: 'none', outlineWidth: 0 } as any]}
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
            <View style={commonStyles.inputWrapper}>
              <TextInput
                style={[commonStyles.inputText, { outlineStyle: 'none', outlineWidth: 0 } as any]}
                placeholder="Confirm passcode"
                placeholderTextColor="#64748B"
                value={confirmPasscode}
                onChangeText={setConfirmPasscode}
                secureTextEntry
              />
            </View>
          </View>

          {/* Chọn loại thành viên - Custom Dropdown */}
          <View style={styles.memberTypeGroup}>
            <Text style={styles.inputLabel}>CHỌN LOẠI THÀNH VIÊN</Text>

            {/* Trigger button */}
            <TouchableOpacity
              style={[commonStyles.inputWrapper, dropdownOpen && styles.inputWrapperFocused]}
              activeOpacity={0.8}
              onPress={() => setDropdownOpen((prev) => !prev)}
            >
              <Text style={[commonStyles.inputText, !selectedLabel && styles.placeholderText]}>
                {selectedLabel ?? 'Chọn loại thành viên'}
              </Text>
              <Ionicons
                name={dropdownOpen ? 'chevron-up' : 'chevron-down'}
                size={18}
                color="#8898AA"
              />
            </TouchableOpacity>

            {/* Dropdown list */}
            {dropdownOpen && (
              <View style={styles.dropdownList}>
                {MEMBER_OPTIONS.map((option, index) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.dropdownItem,
                      index < MEMBER_OPTIONS.length - 1 && styles.dropdownItemBorder,
                      memberType === option.value && styles.dropdownItemSelected,
                    ]}
                    activeOpacity={0.7}
                    onPress={() => {
                      setMemberType(option.value);
                      setDropdownOpen(false);
                    }}
                  >
                    <Text
                      style={[
                        styles.dropdownItemText,
                        memberType === option.value && styles.dropdownItemTextSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                    {memberType === option.value && (
                      <Ionicons name="checkmark" size={16} color={Colors.primary} />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            )}
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
