import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF3FC',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: height * 0.05,
    paddingBottom: height * 0.18,
    paddingHorizontal: 24,
  },

  // Ảnh chính chiếm phần lớn màn hình
  mainImage: {
    width: '100%',
    height: height * 0.72,
  },

  // Nút Bắt đầu
  button: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
    width: '80%',
    paddingVertical: 16,
    alignItems: 'center',
    boxShadow: '0px 4px 10px rgba(37, 99, 235, 0.35)',
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
});
