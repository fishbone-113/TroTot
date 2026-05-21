import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

import { commonStyles } from '@/styles/common';
import { Colors } from '@/styles/theme';

type TabKey = 'home' | 'explore' | 'chat' | 'favorites' | 'profile';

type TabItem = {
  key: TabKey;
  label: string;
  route: `/(tabs)/${TabKey}`;
  activeIcon: keyof typeof Ionicons.glyphMap;
  inactiveIcon: keyof typeof Ionicons.glyphMap;
};

const TAB_ITEMS: TabItem[] = [
  {
    key: 'home',
    label: 'Trang chủ',
    route: '/(tabs)/home',
    activeIcon: 'home',
    inactiveIcon: 'home-outline',
  },
  {
    key: 'explore',
    label: 'Khám phá',
    route: '/(tabs)/explore',
    activeIcon: 'compass',
    inactiveIcon: 'compass-outline',
  },
  {
    key: 'chat',
    label: 'Trò chuyện',
    route: '/(tabs)/chat',
    activeIcon: 'chatbubble',
    inactiveIcon: 'chatbubble-outline',
  },
  {
    key: 'favorites',
    label: 'Đã thích',
    route: '/(tabs)/favorites',
    activeIcon: 'heart',
    inactiveIcon: 'heart-outline',
  },
  {
    key: 'profile',
    label: 'Thông tin',
    route: '/(tabs)/profile',
    activeIcon: 'person',
    inactiveIcon: 'person-outline',
  },
];

type BottomNavProps = {
  activeTab: TabKey;
  activeTint?: string;
};

export function BottomNav({ activeTab, activeTint = Colors.primary }: BottomNavProps) {
  const router = useRouter();

  return (
    <View style={commonStyles.bottomNav}>
      {TAB_ITEMS.map((tab) => {
        const isActive = tab.key === activeTab;
        const tintColor = isActive ? activeTint : Colors.disabled;

        return (
          <TouchableOpacity
            key={tab.key}
            style={commonStyles.navItem}
            onPress={() => {
              if (!isActive) {
                router.replace(tab.route);
              }
            }}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.inactiveIcon}
              size={22}
              color={tintColor}
            />
            <Text style={[commonStyles.navLabel, isActive && { color: activeTint }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
