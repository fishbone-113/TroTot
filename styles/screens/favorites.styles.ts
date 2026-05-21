import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 44,
    paddingBottom: 16,
    backgroundColor: '#F8FAFF',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A2E5A',
    marginBottom: 2,
  },
  headerSub: {
    fontSize: 13,
    color: '#8898AA',
  },

  // Scroll
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  scrollContentEmpty: {
    flex: 1,
  },

  // Card list
  cardList: {
    gap: 14,
  },

  // Card
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#1A2E5A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  cardImageBox: {
    width: 120,
    alignSelf: 'stretch',
  },
  cardImage: {
    width: 120,
    height: '100%',
  },
  cardInfo: {
    flex: 1,
    padding: 14,
    gap: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4A5568',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A2E5A',
    lineHeight: 20,
  },
  cardAddress: {
    fontSize: 12,
    color: '#8898AA',
    marginBottom: 4,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#8898AA',
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2D3748',
    marginTop: 2,
  },
  priceSuffix: {
    fontSize: 11,
    fontWeight: '400',
    color: '#A0AEC0',
  },

  // Heart button
  heartBtn: {
    position: 'absolute',
    bottom: 14,
    right: 14,
  },

  // Empty state
  emptyBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingTop: 60,
    gap: 12,
  },
  emptyIconBox: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3EEFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A2E5A',
    textAlign: 'center',
  },
  emptyDesc: {
    fontSize: 13,
    color: '#8898AA',
    textAlign: 'center',
    lineHeight: 20,
  },

});
