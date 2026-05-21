import { Platform, StyleSheet } from 'react-native';

import { Colors, Radius } from './theme';

export const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bgScreen,
  },
  whiteScreen: {
    flex: 1,
    backgroundColor: Colors.bgWhite,
  },
  scrollView: {
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgInput,
    borderRadius: Radius.md,
    paddingHorizontal: 14,
    height: 48,
    gap: 8,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.navy,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.bgInput,
    borderRadius: Radius.sm,
    paddingHorizontal: 16,
    height: 52,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  inputText: {
    flex: 1,
    fontSize: 15,
    color: Colors.navy,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: Colors.bgWhite,
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 28 : 16,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    shadowColor: '#00000015',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  navLabel: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.disabled,
  },
});
