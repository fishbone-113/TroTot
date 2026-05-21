import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { BottomNav } from '@/components/bottom-nav';
import { commonStyles } from '@/styles/common';
import { styles } from '@/styles/screens/chat.styles';
import { Colors } from '@/styles/theme';

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
  const hasUnread = Boolean(item.unreadCount && item.unreadCount > 0);
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.convItem}
      activeOpacity={0.75}
      onPress={() =>
        router.push({
          pathname: '/conversation' as any,
          params: { name: item.name, avatar: item.avatar },
        })
      }
    >
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
  const [search, setSearch] = useState('');

  const filtered = CONVERSATIONS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={commonStyles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgScreen} />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Trò chuyện</Text>
        <TouchableOpacity style={styles.newChatBtn}>
          <Ionicons name="create-outline" size={22} color="#2563EB" />
        </TouchableOpacity>
      </View>

      {/* ── Search bar ── */}
      <View style={styles.searchWrapper}>
        <View style={commonStyles.searchBar}>
          <Ionicons name="search-outline" size={17} color="#8898AA" />
          <TextInput
            style={[commonStyles.searchInput, { outlineStyle: 'none', outlineWidth: 0 } as any]}
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

      <BottomNav activeTab="chat" activeTint={Colors.primaryDark} />
    </View>
  );
}

