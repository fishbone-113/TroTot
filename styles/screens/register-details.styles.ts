import { Dimensions, Platform, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
  inputWrapperFocused: {
    borderColor: '#6084FA',
    backgroundColor: '#F7F8FF',
  },
  placeholderText: {
    color: '#64748B',
  },
  disabledInputWrapper: {
    backgroundColor: '#E2E8F0',
  },
  disabledInput: {
    color: '#64748B',
  },

  // Hàng Tên và Họ
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
    gap: 16,
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
    marginBottom: 10,
    marginLeft: 4,
  },

  // Custom dropdown list
  dropdownList: {
    marginTop: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  dropdownItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F4F7',
  },
  dropdownItemSelected: {
    backgroundColor: '#F0F3FF',
  },
  dropdownItemText: {
    fontSize: 15,
    color: '#1A2E5A',
  },
  dropdownItemTextSelected: {
    color: '#6084FA',
    fontWeight: '600',
  },

  // Footer
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 32 : 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F2F4F7',
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
