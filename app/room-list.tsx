import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { styles } from '@/styles/screens/room-list.styles';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Room {
  id: string;
  title: string;
  address: string;
  rating: number;
  reviews: number;
  rooms: number;
  area: number;
  price: string;
  image: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const NEARBY_ROOMS: Room[] = [
  {
    id: '1',
    title: 'Trọ sinh viên giá rẻ',
    address: 'Phùng Khoang, Hà Đông, Hà Nội',
    rating: 3.6,
    reviews: 63,
    rooms: 1,
    area: 24,
    price: '1.200.000đ',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&q=80',
  },
  {
    id: '2',
    title: 'Entire Classic-modern House in Surabaya',
    address: 'Ahmad Yani, Yonocolo',
    rating: 4.5,
    reviews: 98,
    rooms: 3,
    area: 475,
    price: '$785',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80',
  },
  {
    id: '3',
    title: 'Entire Classic-modern House in Surabaya',
    address: 'Ahmad Yani, Yonocolo',
    rating: 4.5,
    reviews: 98,
    rooms: 3,
    area: 475,
    price: '$785',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&q=80',
  },
  {
    id: '4',
    title: 'Phòng trọ tiện nghi gần trường',
    address: 'Cầu Giấy, Hà Nội',
    rating: 4.2,
    reviews: 44,
    rooms: 1,
    area: 22,
    price: '1.800.000đ',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
  },
  {
    id: '5',
    title: 'Mini house thoáng mát',
    address: 'Bắc Từ Liêm, Hà Nội',
    rating: 3.9,
    reviews: 21,
    rooms: 1,
    area: 18,
    price: '900.000đ',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&q=80',
  },
  {
    id: '6',
    title: 'Phòng trọ sạch sẽ, an ninh',
    address: 'Thanh Xuân, Hà Nội',
    rating: 4.0,
    reviews: 17,
    rooms: 1,
    area: 20,
    price: '1.300.000đ',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&q=80',
  },
];

const TOP_RATED_ROOMS: Room[] = [
  {
    id: '1',
    title: 'Trọ đầy đủ tiện nghi',
    address: 'Văn Quán, Hà Đông, Hà Nội',
    rating: 4.5,
    reviews: 83,
    rooms: 2,
    area: 34,
    price: '3.500.000đ',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80',
  },
  {
    id: '2',
    title: 'Modern white and sleek apartment in Surabaya',
    address: 'Malang, Probolinggo',
    rating: 4.8,
    reviews: 73,
    rooms: 2,
    area: 673,
    price: '$800',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&q=80',
  },
  {
    id: '3',
    title: 'Modern white and sleek apartment in Surabaya',
    address: 'Malang, Probolinggo',
    rating: 4.8,
    reviews: 73,
    rooms: 2,
    area: 673,
    price: '$800',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=500&q=80',
  },
  {
    id: '4',
    title: 'Căn hộ studio cao cấp view đẹp',
    address: 'Tây Hồ, Hà Nội',
    rating: 4.9,
    reviews: 56,
    rooms: 2,
    area: 45,
    price: '5.000.000đ',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80',
  },
  {
    id: '5',
    title: 'Nhà nguyên căn sang trọng',
    address: 'Long Biên, Hà Nội',
    rating: 4.7,
    reviews: 39,
    rooms: 4,
    area: 80,
    price: '8.000.000đ',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80',
  },
  {
    id: '6',
    title: 'Penthouse tầng cao thoáng gió',
    address: 'Ba Đình, Hà Nội',
    rating: 4.8,
    reviews: 61,
    rooms: 3,
    area: 100,
    price: '12.000.000đ',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=500&q=80',
  },
];

// ─── Sort Options ─────────────────────────────────────────────────────────────
const SORT_OPTIONS = ['Mặc định', 'Giá tăng dần', 'Giá giảm dần', 'Đánh giá cao'];

// ─── RoomListCard ─────────────────────────────────────────────────────────────

function RoomListCard({ item }: { item: Room }) {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.88}>
      {/* Image */}
      <Image source={{ uri: item.image }} style={styles.cardImage} contentFit="cover" />

      {/* Content */}
      <View style={styles.cardContent}>
        {/* Rating */}
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={12} color="#F6AD55" />
          <Text style={styles.ratingText}>
            {item.rating} ({item.reviews})
          </Text>
        </View>

        {/* Title */}
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>

        {/* Address */}
        <Text style={styles.cardAddress} numberOfLines={1}>
          {item.address}
        </Text>

        {/* Meta */}
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="bed-outline" size={12} color="#718096" />
            <Text style={styles.metaText}>{item.rooms} room</Text>
          </View>
          <View style={styles.metaDot} />
          <View style={styles.metaItem}>
            <Ionicons name="resize-outline" size={12} color="#718096" />
            <Text style={styles.metaText}>{item.area} m²</Text>
          </View>
        </View>

        {/* Price + Heart */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>
            {item.price}
            <Text style={styles.priceSuffix}> / tháng</Text>
          </Text>
          <TouchableOpacity
            onPress={() => setLiked(l => !l)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={18}
              color={liked ? '#E53E3E' : '#CBD5E0'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function RoomListScreen() {
  const router = useRouter();
  const { type } = useLocalSearchParams<{ type: 'nearby' | 'top-rated' }>();

  const isNearby = type === 'nearby';
  const title = isNearby ? 'Gần bạn' : 'Đánh giá cao';
  const subtitle = isNearby ? '200 khu vực gần bạn' : 'Phòng được đánh giá tốt nhất';
  const data = isNearby ? NEARBY_ROOMS : TOP_RATED_ROOMS;

  const [activeSort, setActiveSort] = useState('Mặc định');
  const [search, setSearch] = useState('');

  const filtered = data.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFF" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="chevron-back" size={22} color="#1A2E5A" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSub}>{subtitle}</Text>
        </View>
        <TouchableOpacity style={styles.filterIconBtn}>
          <Ionicons name="options-outline" size={20} color="#2563EB" />
        </TouchableOpacity>
      </View>

      {/* ── Search ── */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={17} color="#A0AEC0" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm tên phòng, khu vực..."
            placeholderTextColor="#A0AEC0"
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
              <Ionicons name="close-circle" size={17} color="#A0AEC0" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* ── Sort chips ── */}
      <View style={styles.sortRow}>
        <FlatList
          data={SORT_OPTIONS}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sortList}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.sortChip, activeSort === item && styles.sortChipActive]}
              onPress={() => setActiveSort(item)}
            >
              <Text style={[styles.sortChipText, activeSort === item && styles.sortChipTextActive]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* ── Result count ── */}
      <View style={styles.resultRow}>
        <Text style={styles.resultText}>
          Hiển thị <Text style={styles.resultCount}>{filtered.length}</Text> kết quả
        </Text>
        <TouchableOpacity style={styles.sortBtn}>
          <Ionicons name="swap-vertical-outline" size={15} color="#4A5568" />
          <Text style={styles.sortBtnText}>Sort</Text>
        </TouchableOpacity>
      </View>

      {/* ── List ── */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RoomListCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Ionicons name="home-outline" size={48} color="#CBD5E0" />
            <Text style={styles.emptyText}>Không tìm thấy phòng nào</Text>
          </View>
        }
      />
    </View>
  );
}

