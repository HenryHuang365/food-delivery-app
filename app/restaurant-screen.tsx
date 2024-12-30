import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { featured } from '@/constants';
import * as Icon from 'react-native-feather';
import { themeColors } from '@/theme';
import fullStar from '../assets/images/fullStar.png';
import DishRow from '@/components/dish-row';

function asString(value: string | string[]): string {
  return Array.isArray(value) ? value[0] : value;
}

export default function RestaurantScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const id = asString(params.id);
  const restaurant = featured.restaurants.find((r) => r.id === Number(id));

  return (
    <View>
      <ScrollView>
        <View className="relative">
          {restaurant && (
            <Image
              className="w-full h-72 rounded-t-3xl"
              source={restaurant.image}
            />
          )}
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold">{restaurant?.name}</Text>
            <View className="flex-row gap-2 my-1">
              <View className="flex-row items-center gap-1">
                <Image source={fullStar} className="h-4 w-4" />
                <Text className="text-xs">
                  <Text className="text-green-700">{restaurant?.stars}</Text>
                  <Text className="text-gray-700">
                    ({restaurant?.reviews} reviews) -{' '}
                    <Text>{restaurant?.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">
                  Nearby - {restaurant?.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">
              {restaurant?.description}
            </Text>
          </View>
        </View>

        {/* Menu */}
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* Dish Row */}
          {restaurant?.dishes.map((dish, index) => {
            return <DishRow key={index} dish={dish} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
