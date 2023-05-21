import {
  ParamListBase,
  createNavigationContainerRef,
} from '@react-navigation/native'

type RootStackParamList = ParamListBase & {
  // Khai báo các màn hình trong stack navigation
  // Ví dụ: HomeScreen: undefined;
}

// Khởi tạo navigationRef
const navigationRef = createNavigationContainerRef<RootStackParamList>()

// Tạo các helper functions để truy cập vào navigationRef
export const NavigationService = {
  navigate: (
    name: keyof RootStackParamList,
    params?: RootStackParamList[keyof RootStackParamList],
  ) => {
    navigationRef.current?.navigate(name, params)
  },
  goBack: () => {
    navigationRef.current?.goBack()
  },
  // Thêm các helper functions khác tùy theo nhu cầu của bạn
}

export default navigationRef
