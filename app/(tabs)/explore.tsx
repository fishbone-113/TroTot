import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { BottomNav } from '@/components/bottom-nav';
import { commonStyles } from '@/styles/common';
import { styles } from '@/styles/screens/explore.styles';
import { Colors } from '@/styles/theme';

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const EXPLORE_ROOMS = [
  {
    id: '1',
    title: 'Trọ sinh viên giá rẻ',
    address: 'Phùng Khoang, Hà Đông, Hà Nội',
    rating: 3.6,
    reviews: 69,
    rooms: 1,
    area: 24,
    price: '1.200.000',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80',
  },
  {
    id: '2',
    title: 'Trọ đầy đủ tiện nghi',
    address: 'Văn Quán, Hà Đông, Hà Nội',
    rating: 4.5,
    reviews: 31,
    rooms: 2,
    area: 34,
    price: '3.500.000',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80',
  },
  {
    id: '3',
    title: 'Trọ tiết kiệm',
    address: 'Đường Nội, Hà Đông',
    rating: 2.6,
    reviews: 20,
    rooms: 1,
    area: 12,
    price: '600.000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80',
  },
  {
    id: '4',
    title: 'Căn hộ studio cao cấp',
    address: 'Mỗ Lao, Hà Đông, Hà Nội',
    rating: 4.8,
    reviews: 47,
    rooms: 2,
    area: 40,
    price: '4.200.000',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80',
  },
  {
    id: '5',
    title: 'Phòng trọ gần ĐH Kiến Trúc',
    address: 'Nguyễn Trãi, Hà Đông, Hà Nội',
    rating: 4.1,
    reviews: 12,
    rooms: 1,
    area: 20,
    price: '1.500.000',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
  },
];

// ─── RoomRow Card ──────────────────────────────────────────────────────────────

function RoomRow({ item }: { item: typeof EXPLORE_ROOMS[0] }) {
  const [liked, setLiked] = useState(false);

  const ratingColor =
    item.rating >= 4.0 ? '#48BB78' : item.rating >= 3.0 ? '#F6AD55' : '#FC8181';

  return (
    <TouchableOpacity style={styles.roomCard} activeOpacity={0.88}>
      {/* Image */}
      <View style={styles.roomImageBox}>
        <Image source={{ uri: item.image }} style={styles.roomImage} contentFit="cover" />
        {/* Rating badge */}
        <View style={[styles.ratingBadge, { backgroundColor: ratingColor }]}>
          <Ionicons name="star" size={9} color="#FFF" />
          <Text style={styles.ratingText}>
            {item.rating} ({item.reviews})
          </Text>
        </View>
      </View>

      {/* Info */}
      <View style={styles.roomInfo}>
        <Text style={styles.roomTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.roomAddress} numberOfLines={1}>
          {item.address}
        </Text>
        <View style={styles.roomMeta}>
          <View style={styles.metaItem}>
            <Ionicons name="bed-outline" size={12} color="#8898AA" />
            <Text style={styles.metaText}>{item.rooms} phòng</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="resize-outline" size={12} color="#8898AA" />
            <Text style={styles.metaText}>{item.area} m²</Text>
          </View>
        </View>
        <Text style={styles.roomPrice}>
          {item.price}
          <Text style={styles.priceSuffix}> / tháng</Text>
        </Text>
      </View>

      {/* Heart */}
      <TouchableOpacity
        style={styles.heartBtn}
        onPress={() => setLiked((l) => !l)}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          size={20}
          color={liked ? '#E53E3E' : '#CBD5E0'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

// ─── Main Screen ───────────────────────────────────────────────────────────────

export default function ExploreScreen() {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);

  const displayedRooms = showMore ? EXPLORE_ROOMS : EXPLORE_ROOMS.slice(0, 3);

  return (
    <View style={commonStyles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgScreen} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Ionicons name="chevron-back" size={22} color="#1A2E5A" />
        </TouchableOpacity>

        <TouchableOpacity style={[commonStyles.searchBar, styles.searchBar]} activeOpacity={0.8}>
          <Ionicons name="search-outline" size={16} color="#8898AA" />
          <Text style={styles.searchText}>Hà Đông, Hà Nội</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={20} color="#6084FA" />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Map Placeholder ── */}
        <View style={styles.mapContainer}>
          {/* Nền bản đồ giả */}
          <View style={styles.mapBg}>
            {/* Grid lines ngang */}
            {[0.2, 0.4, 0.6, 0.8].map((v) => (
              <View key={v} style={[styles.gridLineH, { top: `${v * 100}%` as any }]} />
            ))}
            {/* Grid lines dọc */}
            {[0.2, 0.4, 0.6, 0.8].map((v) => (
              <View key={v} style={[styles.gridLineV, { left: `${v * 100}%` as any }]} />
            ))}
            {/* Khu vực màu */}
            <View style={[styles.mapZone, { top: '15%', left: '20%', width: '35%', height: '30%', backgroundColor: '#C7D9F8' }]} />
            <View style={[styles.mapZone, { top: '35%', left: '45%', width: '30%', height: '25%', backgroundColor: '#C8EED4' }]} />
            <View style={[styles.mapZone, { top: '55%', left: '15%', width: '40%', height: '28%', backgroundColor: '#F8D9C8' }]} />
            {/* Marker chính giữa */}
            <View style={styles.mapMarkerWrap}>
              <View style={styles.mapMarker}>
                <Ionicons name="location" size={22} color="#FFFFFF" />
              </View>
              <View style={styles.mapMarkerTail} />
            </View>
            {/* Label */}
            <View style={styles.mapLabel}>
              <Ionicons name="location-outline" size={12} color="#6084FA" />
              <Text style={styles.mapLabelText}>Hà Đông, Hà Nội</Text>
            </View>
          </View>
          {/* Hint badge */}
          <View style={styles.mapOverlayHint}>
            <Ionicons name="map-outline" size={12} color="#FFFFFF" />
            <Text style={styles.mapOverlayText}>Bản đồ khu vực</Text>
          </View>
        </View>

        {/* ── Results header ── */}
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsCount}>
            Hiển thị{' '}
            <Text style={styles.resultsCountBold}>72 kết quả</Text>
          </Text>
          <TouchableOpacity style={styles.sortBtn}>
            <Ionicons name="swap-vertical-outline" size={15} color="#6084FA" />
            <Text style={styles.sortText}>Sort</Text>
          </TouchableOpacity>
        </View>

        {/* ── Room list ── */}
        <View style={styles.roomList}>
          {displayedRooms.map((item) => (
            <RoomRow key={item.id} item={item} />
          ))}
        </View>

        {/* ── Show more button ── */}
        {!showMore && (
          <TouchableOpacity
            style={styles.showMoreBtn}
            activeOpacity={0.8}
            onPress={() => setShowMore(true)}
          >
            <Text style={styles.showMoreText}>Hiển thị thêm kết quả</Text>
          </TouchableOpacity>
        )}

        <View style={{ height: 24 }} />
      </ScrollView>

      <BottomNav activeTab="explore" />
    </View>
  );
}

