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
import { BottomNav } from '@/components/bottom-nav';
import { commonStyles } from '@/styles/common';
import { styles } from '@/styles/screens/favorites.styles';
import { Colors } from '@/styles/theme';

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const INITIAL_FAVORITES = [
  {
    id: '1',
    title: 'Trọ sinh viên giá rẻ',
    address: 'Phùng Khoang, Hà Đông, Hà Nội',
    rating: 3.6,
    reviews: 63,
    rooms: 1,
    area: 24,
    price: '1.200.000',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80',
  },
];

// ─── Room Card ─────────────────────────────────────────────────────────────────

function FavoriteCard({
  item,
  onRemove,
}: {
  item: typeof INITIAL_FAVORITES[0];
  onRemove: (id: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.88}>
      {/* Image */}
      <View style={styles.cardImageBox}>
        <Image source={{ uri: item.image }} style={styles.cardImage} contentFit="cover" />
      </View>

      {/* Info */}
      <View style={styles.cardInfo}>
        {/* Rating */}
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={13} color="#F6AD55" />
          <Text style={styles.ratingText}>
            {item.rating} ({item.reviews})
          </Text>
        </View>

        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.cardAddress} numberOfLines={1}>
          {item.address}
        </Text>

        {/* Meta */}
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="bed-outline" size={13} color="#8898AA" />
            <Text style={styles.metaText}>{item.rooms} room</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="camera-outline" size={13} color="#8898AA" />
            <Text style={styles.metaText}>{item.area} m²</Text>
          </View>
        </View>

        <Text style={styles.cardPrice}>
          {item.price}đ
          <Text style={styles.priceSuffix}> / tháng</Text>
        </Text>
      </View>

      {/* Heart button */}
      <TouchableOpacity
        style={styles.heartBtn}
        onPress={() => onRemove(item.id)}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Ionicons name="heart" size={22} color="#B794F4" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

// ─── Empty State ───────────────────────────────────────────────────────────────

function EmptyState() {
  return (
    <View style={styles.emptyBox}>
      <View style={styles.emptyIconBox}>
        <Ionicons name="heart-outline" size={42} color="#B794F4" />
      </View>
      <Text style={styles.emptyTitle}>Chưa có mục yêu thích</Text>
      <Text style={styles.emptyDesc}>
        Bấm vào icon ♡ trên các phòng để lưu vào danh sách yêu thích của bạn
      </Text>
    </View>
  );
}

// ─── Main Screen ───────────────────────────────────────────────────────────────

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState(INITIAL_FAVORITES);

  const handleRemove = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={commonStyles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgScreen} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Yêu thích</Text>
        <Text style={styles.headerSub}>Các mục yêu thích của bạn</Text>
      </View>

      {/* ── Content ── */}
      <ScrollView
        style={commonStyles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          favorites.length === 0 && styles.scrollContentEmpty,
        ]}
        showsVerticalScrollIndicator={false}
      >
        {favorites.length === 0 ? (
          <EmptyState />
        ) : (
          <View style={styles.cardList}>
            {favorites.map((item) => (
              <FavoriteCard key={item.id} item={item} onRemove={handleRemove} />
            ))}
          </View>
        )}
      </ScrollView>

      <BottomNav activeTab="favorites" activeTint={Colors.favorite} />
    </View>
  );
}

