import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },

  // Logo / ảnh phía trên
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
    paddingTop: 28,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#212943',
    alignSelf: 'center',
    marginBottom: 32,
  },

  // Input
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#A0AEC0',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1A2E5A',
    outlineWidth: 0,
  },
  inputPassword: {
    letterSpacing: 2,
  },
  eyeButton: {
    padding: 4,
  },

  // Nút Đăng Nhập
  loginButton: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
    boxShadow: '0px 4px 10px rgba(37, 99, 235, 0.3)',
    elevation: 5,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  // Footer
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 30,
  },
  // Nút Tạo tài khoản
  registerButton: {
    backgroundColor: '#1A2E5A',
    borderRadius: 14,
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },

  // Link
  linkText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A2E5A',
    textDecorationLine: 'underline',
  },
});
