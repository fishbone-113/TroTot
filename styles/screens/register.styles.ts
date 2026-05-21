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
    marginBottom: 8, // Giảm khoảng cách này để chữ gần với input hơn
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#212943',
    marginBottom: 40, // Đưa khoảng cách lớn vào đây để cách xa chữ XÁC NHẬN
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#A0AEC0',
    letterSpacing: 1.5,
    alignSelf: 'flex-start',
    marginLeft: 4,
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

  // Hàng nhập mã
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  codeInputWrapper: {
    flex: 1,
    marginRight: 12,
  },
  getCodeButton: {
    backgroundColor: '#3B68E9',
    borderRadius: 8,
    height: 52,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getCodeButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },

  // Nút Xác nhận
  confirmButton: {
    backgroundColor: '#3B68E9',
    borderRadius: 8,
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // Footer
  footerContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 30,
    paddingBottom: 24, // Thêm padding dưới để nút quay lại không bị dính đáy
  },
  backLink: {
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#4A5568',
  },
});
