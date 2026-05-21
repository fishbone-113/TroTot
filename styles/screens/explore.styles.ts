import { Dimensions, Platform, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 8,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 56 : 40,
    paddingBottom: 12,
    backgroundColor: '#F8FAFF',
    gap: 10,
  },
  backBtn: {
    width: 38,
    height: 38,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1A2E5A',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  searchBar: {
    flex: 1,
    paddingHorizontal: 12,
    height: 42,
  },
  searchText: {
    flex: 1,
    fontSize: 14,
    color: '#1A2E5A',
    fontWeight: '500',
  },
  filterBtn: {
    width: 38,
    height: 38,
    backgroundColor: '#EEF1FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Map
  mapContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.32,
    backgroundColor: '#D1D5DB',
    overflow: 'hidden',
  },
  mapBg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#E8EFF8',
    overflow: 'hidden',
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#D0DCF0',
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#D0DCF0',
  },
  mapZone: {
    position: 'absolute',
    borderRadius: 8,
    opacity: 0.7,
  },
  mapMarkerWrap: {
    position: 'absolute',
    top: '38%',
    left: '45%',
    alignItems: 'center',
  },
  mapMarker: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#6084FA',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6084FA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  mapMarkerTail: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#6084FA',
    marginTop: -1,
  },
  mapLabel: {
    position: 'absolute',
    bottom: 10,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapLabelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1A2E5A',
  },
  mapOverlayHint: {
    position: 'absolute',
    bottom: 10,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  mapOverlayText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '500',
  },

  // Results header
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  resultsCount: {
    fontSize: 14,
    color: '#718096',
  },
  resultsCountBold: {
    fontWeight: '700',
    color: '#1A2E5A',
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EEF1FF',
    borderRadius: 8,
  },
  sortText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6084FA',
  },

  // Room list
  roomList: {
    paddingHorizontal: 20,
    gap: 12,
  },
  roomCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#1A2E5A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  roomImageBox: {
    width: 110,
    height: 110,
    position: 'relative',
  },
  roomImage: {
    width: 110,
    height: 110,
  },
  ratingBadge: {
    position: 'absolute',
    top: 8,
    left: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 20,
  },
  ratingText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // Room info
  roomInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  roomTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A2E5A',
    marginBottom: 3,
    lineHeight: 18,
  },
  roomAddress: {
    fontSize: 11,
    color: '#8898AA',
    marginBottom: 6,
  },
  roomMeta: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 6,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  metaText: {
    fontSize: 11,
    color: '#8898AA',
  },
  roomPrice: {
    fontSize: 13,
    fontWeight: '800',
    color: '#6084FA',
  },
  priceSuffix: {
    fontSize: 11,
    fontWeight: '400',
    color: '#A0AEC0',
  },

  // Heart
  heartBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },

  // Show more
  showMoreBtn: {
    marginHorizontal: 20,
    marginTop: 16,
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#6084FA',
    alignItems: 'center',
  },
  showMoreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6084FA',
  },

});
