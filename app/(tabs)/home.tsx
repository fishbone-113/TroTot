import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
  TextInput,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ─── Mock Data ───────────────────────────────────────────────────────────────

const NEARBY_ROOMS = [
  {
    id: '1',
    title: 'Trọ sinh viên giá rẻ',
    address: 'Hà Đông, Hà Nội',
    rating: 3.6,
    reviews: 8,
    rooms: 1,
    area: 24,
    price: '1.200.000',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80',
  },
  {
    id: '2',
    title: 'Phòng trọ gần ĐH',
    address: 'Cầu Giấy, Hà Nội',
    rating: 4.1,
    reviews: 12,
    rooms: 1,
    area: 20,
    price: '1.500.000',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
  },
  {
    id: '3',
    title: 'Phòng trọ tiện nghi',
    address: 'Thanh Xuân, Hà Nội',
    rating: 4.3,
    reviews: 5,
    rooms: 2,
    area: 30,
    price: '2.000.000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
  },
  {
    id: '4',
    title: 'Mini house giá rẻ',
    address: 'Bắc Từ Liêm, Hà Nội',
    rating: 3.9,
    reviews: 3,
    rooms: 1,
    area: 18,
    price: '900.000',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80',
  },
];

const TOP_RATED_ROOMS = [
  {
    id: '5',
    title: 'Trọ đầy đủ tiện nghi',
    address: 'Phùng Khoang, Hà Đông, Hà Nội',
    rating: 4.5,
    reviews: 32,
    rooms: 2,
    area: 34,
    price: '3.500.000',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
  },
  {
    id: '6',
    title: 'Căn hộ studio cao cấp',
    address: 'Cầu Giấy, Hà Nội',
    rating: 4.8,
    reviews: 47,
    rooms: 2,
    area: 40,
    price: '4.200.000',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80',
  },
  {
    id: '7',
    title: 'Phòng trọ view đẹp',
    address: 'Tây Hồ, Hà Nội',
    rating: 4.7,
    reviews: 21,
    rooms: 1,
    area: 28,
    price: '2.800.000',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&q=80',
  },
  {
    id: '8',
    title: 'Nhà nguyên căn cho thuê',
    address: 'Long Biên, Hà Nội',
    rating: 4.6,
    reviews: 15,
    rooms: 3,
    area: 60,
    price: '6.500.000',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&q=80',
  },
];

const NEARBY_AREAS = [
  {
    id: '1',
    name: 'Nam Từ Liêm',
    count: '300+ điểm thuê trọ',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80',
  },
  {
    id: '2',
    name: 'Thanh Xuân',
    count: '300+ điểm thuê trọ',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&q=80',
  },
  {
    id: '3',
    name: 'Cầu Giấy',
    count: '250+ điểm thuê trọ',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80',
  },
  {
    id: '4',
    name: 'Hà Đông',
    count: '200+ điểm thuê trọ',
    image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=400&q=80',
  },
];

// ─── Sub Components ───────────────────────────────────────────────────────────

function RoomCard({ item }: { item: typeof NEARBY_ROOMS[0] }) {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity style={styles.roomCard} activeOpacity={0.92}>
      <Image source={{ uri: item.image }} style={styles.roomImage} contentFit="cover" />
      <TouchableOpacity
        style={styles.heartBtn}
        onPress={() => setLiked(l => !l)}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={18}
          color={liked ? '#E53E3E' : '#718096'}
        />
      </TouchableOpacity>
      {/* Rating badge */}
      <View style={styles.ratingBadge}>
        <Ionicons name="star" size={11} color="#F6AD55" />
        <Text style={styles.ratingText}>
          {item.rating} ({item.reviews})
        </Text>
      </View>
      <View style={styles.roomInfo}>
        <Text style={styles.roomTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.roomAddress} numberOfLines={1}>
          {item.address}
        </Text>
        <View style={styles.roomMeta}>
          <View style={styles.metaItem}>
            <Ionicons name="bed-outline" size={12} color="#718096" />
            <Text style={styles.metaText}>{item.rooms} room</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="resize-outline" size={12} color="#718096" />
            <Text style={styles.metaText}>{item.area} m²</Text>
          </View>
        </View>
        <Text style={styles.roomPrice}>
          {item.price}
          <Text style={styles.priceSuffix}> / tháng</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function AreaCard({ item }: { item: typeof NEARBY_AREAS[0] }) {
  return (
    <TouchableOpacity style={styles.areaCard} activeOpacity={0.88}>
      <Image source={{ uri: item.image }} style={styles.areaImage} contentFit="cover" />
      {/* Dark overlay */}
      <View style={styles.areaOverlay} />
      <View style={styles.areaTextBox}>
        <Text style={styles.areaName}>{item.name}</Text>
        <Text style={styles.areaCount}>{item.count}</Text>
      </View>
    </TouchableOpacity>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function HomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFF" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          <View style={styles.locationRow}>
            <Ionicons name="location" size={16} color="#2563EB" />
            <Text style={styles.locationText}>Hà Đông, Hà Nội</Text>
            <Ionicons name="chevron-down" size={14} color="#4A5568" />
          </View>
          <Text style={styles.headerLabel}>Vị trí hiện tại của bạn</Text>
        </View>

        {/* ── Search Bar ── */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={18} color="#A0AEC0" />
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm khu vực, thành phố,..."
              placeholderTextColor="#A0AEC0"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={20} color="#2563EB" />
          </TouchableOpacity>
        </View>

        {/* ── Welcome ── */}
        <Text style={styles.welcomeText}>Chào mừng đến trọ tốt</Text>

        {/* ── Gần bạn ── */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Gần bạn</Text>
            <Text style={styles.sectionSubtitle}>200 khu vực gần bạn</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/room-list?type=nearby')}>
            <Text style={styles.seeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={NEARBY_ROOMS}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => <RoomCard item={item} />}
          snapToInterval={CARD_WIDTH + 12}
          decelerationRate="fast"
        />

        {/* ── Đánh giá cao ── */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Đánh giá cao</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/room-list?type=top-rated')}>
            <Text style={styles.seeAll}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={TOP_RATED_ROOMS}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => <RoomCard item={item} />}
          snapToInterval={CARD_WIDTH + 12}
          decelerationRate="fast"
        />

        {/* ── Khu vực xung quanh ── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Khu vực xung quanh</Text>
        </View>
        <FlatList
          data={NEARBY_AREAS}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
          renderItem={({ item }) => <AreaCard item={item} />}
          snapToInterval={AREA_CARD_WIDTH + 12}
          decelerationRate="fast"
        />

        {/* ── Banner CTA ── */}
        <View style={styles.ctaBanner}>
          <View style={styles.ctaTextBox}>
            <Text style={styles.ctaTitle}>Bạn muốn{'\n'}quản lý chỗ ở?</Text>
            <Text style={styles.ctaSubtitle}>
              Kiểm thu nhập thu đồng bằng cách cho thuê hoặc bán bất động sản của bạn!
            </Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Đăng ký cho thuê</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ctaImageBox}>
            <Ionicons name="home" size={72} color="#7C3AED" style={{ opacity: 0.85 }} />
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>

      {/* ── Bottom Nav ── */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={22} color="#2563EB" />
          <Text style={[styles.navLabel, { color: '#2563EB' }]}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass-outline" size={22} color="#A0AEC0" />
          <Text style={styles.navLabel}>Khám phá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.replace('/(tabs)/chat')}>
          <Ionicons name="chatbubble-outline" size={22} color="#A0AEC0" />
          <Text style={styles.navLabel}>Trò chuyện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="heart-outline" size={22} color="#A0AEC0" />
          <Text style={styles.navLabel}>Đã thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={22} color="#A0AEC0" />
          <Text style={styles.navLabel}>Thông tin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ─── Constants ────────────────────────────────────────────────────────────────
const CARD_WIDTH = SCREEN_WIDTH * 0.58;
const AREA_CARD_WIDTH = SCREEN_WIDTH * 0.42;

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },
  scrollView: {
    flex: 1,
  },
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
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    gap: 8,
    shadowColor: '#0000001A',
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

  // Bottom Nav
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
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
    color: '#A0AEC0',
  },
});
