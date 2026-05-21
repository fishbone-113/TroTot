import { Dimensions, StyleSheet } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const CARD_WIDTH = SCREEN_WIDTH * 0.58;
export const AREA_CARD_WIDTH = SCREEN_WIDTH * 0.42;

export const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 8,
  },

  // Header
  header: {
    paddingHorizontal: 20,
    paddingTop: 52,
    paddingBottom: 6,
    backgroundColor: '#F8FAFF',
  },
  headerLabel: {
    fontSize: 11,
    color: '#A0AEC0',
    marginBottom: 2,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A2E5A',
    marginHorizontal: 2,
  },

  // Search
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 12,
    marginBottom: 4,
    gap: 10,
  },
  filterBtn: {
    width: 44,
    height: 44,
    backgroundColor: '#EBF2FF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Welcome
  welcomeText: {
    fontSize: 13,
    color: '#718096',
    paddingHorizontal: 20,
    marginTop: 14,
    marginBottom: 4,
  },

  // Section header
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1A2E5A',
  },
  sectionSubtitle: {
    fontSize: 11,
    color: '#A0AEC0',
    marginTop: 2,
  },
  seeAll: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  // Horizontal list
  horizontalList: {
    paddingLeft: 20,
    paddingRight: 8,
  },

  // Room card
  roomCard: {
    width: CARD_WIDTH,
    marginRight: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#0000001A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 4,
  },
  roomImage: {
    width: '100%',
    height: 130,
  },
  heartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 6,
    shadowColor: '#00000020',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },
  ratingBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FFFFFFEE',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 3,
    gap: 3,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1A2E5A',
  },
  roomInfo: {
    padding: 12,
  },
  roomTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A2E5A',
    marginBottom: 3,
  },
  roomAddress: {
    fontSize: 11,
    color: '#718096',
    marginBottom: 8,
  },
  roomMeta: {
    flexDirection: 'row',
    gap: 10,
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
  roomPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2563EB',
  },
  priceSuffix: {
    fontSize: 11,
    fontWeight: '400',
    color: '#A0AEC0',
  },

  // Area card
  areaCard: {
    width: AREA_CARD_WIDTH,
    height: 110,
    marginRight: 12,
    borderRadius: 14,
    overflow: 'hidden',
  },
  areaImage: {
    width: '100%',
    height: '100%',
  },
  areaOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#00000050',
    borderRadius: 14,
  },
  areaTextBox: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  areaName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  areaCount: {
    fontSize: 10,
    color: '#FFFFFFCC',
    marginTop: 2,
  },

  // CTA Banner
  ctaBanner: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: '#EDE9FE',
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    overflow: 'hidden',
  },
  ctaTextBox: {
    flex: 1,
  },
  ctaTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1A2E',
    lineHeight: 22,
    marginBottom: 6,
  },
  ctaSubtitle: {
    fontSize: 11,
    color: '#6B7280',
    lineHeight: 16,
    marginBottom: 14,
  },
  ctaButton: {
    backgroundColor: '#2563EB',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  ctaButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  ctaImageBox: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
