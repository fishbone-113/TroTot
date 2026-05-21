import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { BottomNav } from '@/components/bottom-nav';
import { commonStyles } from '@/styles/common';
import { styles } from '@/styles/screens/profile.styles';
import { Colors } from '@/styles/theme';

// ─── Menu items config ─────────────────────────────────────────────────────────

const MENU_ITEMS = [
  {
    id: 'personal',
    label: 'Thông tin cá nhân',
    icon: 'person-outline' as const,
  },
  {
    id: 'settings',
    label: 'Cài đặt',
    icon: 'settings-outline' as const,
  },
  {
    id: 'payment',
    label: 'Thông tin thanh toán',
    icon: 'card-outline' as const,
  },
  {
    id: 'faq',
    label: 'FAQ',
    icon: 'help-circle-outline' as const,
  },
];

// ─── Main Screen ───────────────────────────────────────────────────────────────

export default function ProfileScreen() {
  const router = useRouter();
  const [showSwitchModal, setShowSwitchModal] = useState(false);

  return (
    <View style={commonStyles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.bgScreen} />

      <ScrollView
        style={commonStyles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Top bar ── */}
        <View style={styles.topBar}>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={styles.logoutIconBtn}
            activeOpacity={0.7}
            onPress={() => router.replace('/login')}
          >
            <Ionicons name="log-out-outline" size={22} color="#6084FA" />
          </TouchableOpacity>
        </View>

        {/* ── Avatar + Name ── */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
              style={styles.avatar}
              contentFit="cover"
            />
          </View>
          <Text style={styles.userName}>Tôi</Text>
          <Text style={styles.userEmail}>gmail123@gmail.com</Text>
        </View>

        {/* ── Menu group 1 ── */}
        <View style={styles.menuCard}>
          {MENU_ITEMS.map((item, index) => (
            <React.Fragment key={item.id}>
              <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
                <View style={styles.menuIconBox}>
                  <Ionicons name={item.icon} size={20} color="#6084FA" />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Ionicons name="chevron-forward" size={17} color="#CBD5E0" />
              </TouchableOpacity>
              {index < MENU_ITEMS.length - 1 && <View style={styles.menuDivider} />}
            </React.Fragment>
          ))}
        </View>

        {/* ── Switch role ── */}
        <View style={[styles.menuCard, { marginTop: 12 }]}>
          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => setShowSwitchModal(true)}
          >
            <View style={styles.menuIconBox}>
              <Ionicons name="swap-horizontal-outline" size={20} color="#6084FA" />
            </View>
            <Text style={styles.menuLabel}>Chuyển sang cho thuê</Text>
            <Ionicons name="chevron-forward" size={17} color="#CBD5E0" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>

      <BottomNav activeTab="profile" />

      {/* ── Confirm Switch Modal ── */}
      <Modal
        visible={showSwitchModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSwitchModal(false)}
      >
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setShowSwitchModal(false)}
        >
          <Pressable style={styles.modalCard} onPress={() => {}}>
            {/* Icon */}
            <View style={styles.modalIconBox}>
              <Ionicons name="swap-horizontal" size={28} color="#6084FA" />
            </View>

            {/* Title */}
            <Text style={styles.modalTitle}>Chuyển sang cho thuê?</Text>

            {/* Description */}
            <Text style={styles.modalDesc}>
              {'Bạn sẽ chuyển vai trò thành '}
              <Text style={{ fontWeight: '700', color: '#1A2E5A' }}>Người cho thuê</Text>
              {'. \nBạn có thể chuyển lại bất kỳ lúc nào trong phần cài đặt.'}
            </Text>

            {/* Buttons */}
            <View style={styles.modalBtnRow}>
              <TouchableOpacity
                style={styles.modalBtnCancel}
                activeOpacity={0.75}
                onPress={() => setShowSwitchModal(false)}
              >
                <Text style={styles.modalBtnCancelText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalBtnConfirm}
                activeOpacity={0.85}
                onPress={() => {
                  setShowSwitchModal(false);
                  // TODO: gọi API chuyển vai trò
                }}
              >
                <Text style={styles.modalBtnConfirmText}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
}

