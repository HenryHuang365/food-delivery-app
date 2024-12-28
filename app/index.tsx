import { Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import { themeColors } from "@/theme";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />
      {/* Search Bar */}
      <View className="flex-row items-center gap-2 px-4 py-2">
        <View className="flex-row items-center flex-1 justify-between gap-1 p-3 rounded-full border border-gray-300">
          <View className="flex flex-row items-center flex-1">
            <Icon.Search height={25} width={25} stroke="gray" />
            <TextInput placeholder="Restaurant" className="w-0 flex-1 ml-1"/>
          </View>
          <View className="flex-row items-center gap-1 border-0 border-l-2 pl-2 border-gray-300 shrink">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text
              className="text-gray-600 shrink"
              numberOfLines={1}
              ellipsizeMode="tail"
            >Sydney, AU</Text>
          </View>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
          <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
        </View>
      </View>
    </SafeAreaView>
  );
}