import { Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 12,
    backgroundColor: '#F8FAFF',
  },
  backBtn: {
    width: 38,
    height: 38,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00000015',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A2E5A',
  },
  headerSub: {
    fontSize: 11,
    color: '#A0AEC0',
    marginTop: 1,
  },
  filterIconBtn: {
    width: 38,
    height: 38,
    backgroundColor: '#EBF2FF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Search
  searchWrapper: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 44,
    gap: 8,
    shadowColor: '#00000012',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#1A2E5A',
  },

  // Sort chips
  sortRow: {
    marginBottom: 8,
  },
  sortList: {
    paddingHorizontal: 16,
    gap: 8,
  },
  sortChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sortChipActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  sortChipText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#718096',
  },
  sortChipTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },

  // Result row
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  resultText: {
    fontSize: 13,
    color: '#718096',
  },
  resultCount: {
    fontWeight: '700',
    color: '#1A2E5A',
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sortBtnText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4A5568',
  },

  // List
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 12,
  },

  // Card (horizontal layout)
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#00000015',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardImage: {
    width: SCREEN_WIDTH * 0.36,
    height: 140,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1A2E5A',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A2E5A',
    lineHeight: 18,
    marginBottom: 4,
  },
  cardAddress: {
    fontSize: 11,
    color: '#718096',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  metaText: {
    fontSize: 11,
    color: '#718096',
  },
  metaDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#CBD5E0',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2563EB',
  },
  priceSuffix: {
    fontSize: 10,
    fontWeight: '400',
    color: '#A0AEC0',
  },

  // Empty
  emptyBox: {
    alignItems: 'center',
    paddingTop: 80,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
});
