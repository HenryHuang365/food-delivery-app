import { Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RestaurantScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="flex flex-col items-center justify-center h-screen">
        <Text className="text-red-300 text-4xl">Restaurant Screen</Text>
        <Button title="Go to Home Screen" onPress={() => router.push('/')} />
      </View>
    </SafeAreaView>
  );
}
