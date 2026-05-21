import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

});
