import { Text } from "react-native";
import { useRouter } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  const router = useRouter();
  
    return (
      <SafeAreaView className="flex flex-col items-center justify-center h-screen">
        <Text className="text-center text-blue-500 text-4xl">Go Back to Home Screen</Text>
        <Button
          title="Go to Restaurant"
          onPress={() => router.push("/")}
        />
      </SafeAreaView>
    );
}
