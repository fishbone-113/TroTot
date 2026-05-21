# Tro Tot App

Tro Tot App là ứng dụng tìm phòng trọ được xây bằng Expo, React Native và Expo Router. Dự án hiện có các màn chính như đăng nhập, đăng ký, trang chủ, khám phá, trò chuyện, yêu thích, hồ sơ và danh sách phòng.

## Công Nghệ Sử Dụng

- Expo SDK 54
- React 19
- React Native 0.81
- Expo Router
- TypeScript
- pnpm

## Cần Cài Trước

Trước khi chạy dự án, máy cần có các phần mềm sau:

1. Node.js

   Tải và cài bản LTS tại:

   https://nodejs.org

   Sau khi cài xong, mở terminal và kiểm tra:

   ```bash
   node -v
   npm -v
   ```

2. pnpm

   Dự án này dùng `pnpm` để cài package.

   ```bash
   npm install -g pnpm
   ```

   Kiểm tra lại:

   ```bash
   pnpm -v
   ```

3. Expo Go trên điện thoại

   Nếu muốn chạy app bằng điện thoại thật, cài Expo Go:

   - Android: tìm "Expo Go" trên Google Play
   - iPhone: tìm "Expo Go" trên App Store

## Cài Đặt Dự Án

Mở terminal tại thư mục chứa project, sau đó chạy:

```bash
pnpm install
```

Lệnh này sẽ tải toàn bộ thư viện cần thiết dựa theo `package.json` và `pnpm-lock.yaml`.

Nếu đã có thư mục `node_modules` từ trước nhưng app chạy lỗi lạ, có thể xóa `node_modules` rồi chạy lại:

```bash
pnpm install
```

## Chạy Ứng Dụng

Chạy server Expo:

```bash
pnpm start
```

Sau khi chạy, terminal sẽ hiện mã QR và các lựa chọn mở app.

### Chạy Trên Điện Thoại Thật

1. Đảm bảo điện thoại và máy tính dùng chung một mạng Wi-Fi.
2. Mở app Expo Go trên điện thoại.
3. Quét mã QR hiện trong terminal hoặc trên trang Expo.
4. Chờ app tải xong.

Nếu điện thoại không kết nối được, thử chạy:

```bash
pnpm start -- --tunnel
```

### Chạy Trên Android Emulator

Cần cài Android Studio và tạo Android emulator trước.

Sau đó chạy:

```bash
pnpm android
```

Hoặc khi đang ở màn hình Expo terminal, nhấn phím `a`.

### Chạy Trên iOS Simulator

Chỉ dùng được trên macOS có cài Xcode.

```bash
pnpm ios
```

Hoặc khi đang ở màn hình Expo terminal, nhấn phím `i`.

### Chạy Trên Web

```bash
pnpm web
```

Expo sẽ mở app trên trình duyệt.

## Kiểm Tra Code

Chạy lint để kiểm tra lỗi code cơ bản:

```bash
pnpm lint
```

Chạy TypeScript để kiểm tra lỗi kiểu dữ liệu:

```bash
pnpm exec tsc --noEmit
```

Nên chạy hai lệnh này trước khi commit code.

## Cấu Trúc Thư Mục

```text
app/                 Các màn hình và route của Expo Router
app/(tabs)/          Các màn chính trong bottom tab
assets/              Hình ảnh, icon, splash screen
components/          Component dùng lại nhiều nơi
constants/           Hằng số có sẵn của project
hooks/               Custom hooks
styles/              Theme, style dùng chung và style theo từng màn
styles/screens/      Style riêng cho từng file màn hình
scripts/             Script hỗ trợ project
```

## Quy Ước Style

Để file `.tsx` gọn và dễ đọc, style được tách ra ngoài:

- Style dùng chung đặt ở `styles/common.ts`
- Màu sắc, radius, spacing đặt ở `styles/theme.ts`
- Style riêng từng màn đặt ở `styles/screens/*.styles.ts`

Ví dụ:

```ts
import { styles } from '@/styles/screens/home.styles';
```

Không nên viết `StyleSheet.create(...)` trực tiếp trong file màn hình nếu style đó dài.

## Lệnh Hay Dùng

```bash
pnpm install
pnpm start
pnpm android
pnpm ios
pnpm web
pnpm lint
pnpm exec tsc --noEmit
```

## Xử Lý Lỗi Thường Gặp

### App không cập nhật sau khi sửa code

Thử restart Expo và xóa cache:

```bash
pnpm start -- --clear
```

### Điện thoại không quét được QR

Kiểm tra các bước sau:

- Máy tính và điện thoại đang dùng chung Wi-Fi
- Tắt VPN nếu đang bật
- Thử dùng tunnel:

```bash
pnpm start -- --tunnel
```

### Package bị lỗi hoặc thiếu dependency

Chạy lại:

```bash
pnpm install
```

Sau đó restart Expo:

```bash
pnpm start -- --clear
```

## Ghi Chú Cho Người Mới

- Không sửa trực tiếp trong `node_modules`.
- Nếu thêm thư viện mới, dùng `pnpm add ten-thu-vien`.
- Nếu thêm thư viện thuộc Expo, ưu tiên dùng `pnpm exec expo install ten-thu-vien`.
- Mỗi màn hình trong `app/` tương ứng với một route.
- Các màn trong `app/(tabs)/` là các màn chính dùng menu phía dưới.
