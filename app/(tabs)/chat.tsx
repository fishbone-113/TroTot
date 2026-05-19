import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// ─── Types ────────────────────────────────────────────────────────────────────

type ReadStatus = 'sent' | 'delivered' | 'read' | 'unread';

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  readStatus?: ReadStatus; // for sent messages
  isOnline?: boolean;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const CONVERSATIONS: Conversation[] = [
  {
    id: '1',
    name: 'Nguyễn Trần Bảo Khanh',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Cảm ơn đã liên hệ',
    time: '11:23',
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: '2',
    name: 'tôm cu',
    avatar: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'lovely',
    time: 'Hôm qua',
    isOnline: false,
  },
  {
    id: '3',
    name: 'tô mỹ xe bí',
    avatar: 'https://i.pravatar.cc/150?img=32',
    lastMessage: 'It was great experience!',
    time: '11/10/2021',
    isOnline: false,
  },
  {
    id: '4',
    name: 'Cristiano Ronaldo',
    avatar: 'https://i.pravatar.cc/150?img=68',
    lastMessage: 'Quanto custe?',
    time: '15/10/2021',
    readStatus: 'delivered',
    isOnline: true,
  },
  {
    id: '5',
    name: 'Jack Sparrow',
    avatar: 'https://i.pravatar.cc/150?img=53',
    lastMessage: 'Sure, man',
    time: '11/10/2021',
    readStatus: 'read',
    isOnline: false,
  },
  {
    id: '6',
    name: 'Phòng trọ Hà Đông',
    avatar: 'https://i.pravatar.cc/150?img=22',
    lastMessage: 'Phòng còn trống bạn nhé!',
    time: '10/10/2021',
    readStatus: 'read',
    isOnline: false,
  },
  {
    id: '7',
    name: 'Minh Châu',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'Ok bạn ơi, mai mình qua xem nhé',
    time: '09/10/2021',
    unreadCount: 1,
    isOnline: true,
  },
];

// ─── ReadReceipt Component ────────────────────────────────────────────────────

function ReadReceipt({ status }: { status?: ReadStatus }) {
  if (!status) return null;

  if (status === 'delivered') {
    return (
      <View style={styles.tickContainer}>
        <Ionicons name="checkmark" size={13} color="#A0AEC0" />
      </View>
    );
  }
  if (status === 'read') {
    return (
      <View style={styles.tickContainer}>
        <Ionicons name="checkmark-done" size={14} color="#A0AEC0" />
      </View>
    );
  }
  return null;
}

// ─── ConversationItem Component ───────────────────────────────────────────────

function ConversationItem({ item }: { item: Conversation }) {
  const hasUnread = item.unreadCount && item.unreadCount > 0;

  return (
    <TouchableOpacity style={styles.convItem} activeOpacity={0.75}>
      {/* Avatar + Online dot */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.avatar}
          contentFit="cover"
        />
        {item.isOnline && <View style={styles.onlineDot} />}
      </View>

      {/* Content */}
      <View style={styles.convContent}>
        <View style={styles.convTopRow}>
          <Text
            style={[styles.convName, hasUnread && styles.convNameBold]}
            numberOfLines={1}
          >
            {item.name}
          </Text>
          <Text style={[styles.convTime, hasUnread && styles.convTimeUnread]}>
            {item.time}
          </Text>
        </View>

        <View style={styles.convBottomRow}>
          {/* Read receipt (only for sent messages) */}
          {item.readStatus && <ReadReceipt status={item.readStatus} />}

          <Text
            style={[styles.convPreview, hasUnread && styles.convPreviewBold]}
            numberOfLines={1}
          >
            {item.lastMessage}
          </Text>

          {/* Unread badge */}
          {hasUnread ? (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function ChatScreen() {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const filtered = CONVERSATIONS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFF" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trò chuyện</Text>
        <TouchableOpacity style={styles.newChatBtn}>
          <Ionicons name="create-outline" size={22} color="#2563EB" />
        </TouchableOpacity>
      </View>

      {/* ── Search bar ── */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={17} color="#A0AEC0" />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm tin nhắn"
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

      {/* ── List ── */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ConversationItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Ionicons name="chatbubbles-outline" size={48} color="#CBD5E0" />
            <Text style={styles.emptyText}>Không tìm thấy cuộc trò chuyện</Text>
          </View>
        }
      />

      {/* ── Bottom Nav ── */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Ionicons name="home-outline" size={22} color="#A0AEC0" />
          <Text style={styles.navLabel}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="compass-outline" size={22} color="#A0AEC0" />
          <Text style={styles.navLabel}>Khám phá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble" size={22} color="#2563EB" />
          <Text style={[styles.navLabel, { color: '#2563EB' }]}>Trò chuyện</Text>
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

// ─── Styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 12,
    backgroundColor: '#F8FAFF',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A2E5A',
  },
  newChatBtn: {
    width: 38,
    height: 38,
    backgroundColor: '#EBF2FF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Search
  searchWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 12,
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
    fontSize: 14,
    color: '#1A2E5A',
  },

  // List
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#EDF2F7',
    marginLeft: 72,
  },

  // Conversation item
  convItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    gap: 14,
  },

  // Avatar
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E2E8F0',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 1,
    right: 1,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#48BB78',
    borderWidth: 2,
    borderColor: '#F8FAFF',
  },

  // Content
  convContent: {
    flex: 1,
  },
  convTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  convName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2D3748',
    flex: 1,
    marginRight: 8,
  },
  convNameBold: {
    fontWeight: '700',
    color: '#1A2E5A',
  },
  convTime: {
    fontSize: 11,
    color: '#A0AEC0',
    flexShrink: 0,
  },
  convTimeUnread: {
    color: '#2563EB',
    fontWeight: '600',
  },

  convBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tickContainer: {
    flexShrink: 0,
  },
  convPreview: {
    fontSize: 13,
    color: '#718096',
    flex: 1,
  },
  convPreviewBold: {
    fontWeight: '600',
    color: '#1A2E5A',
  },

  // Unread badge
  unreadBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    flexShrink: 0,
  },
  unreadText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  // Empty state
  emptyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#A0AEC0',
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
