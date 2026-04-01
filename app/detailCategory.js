import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function DetailCategory() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // 🔹 DATA giống bên Home
const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 4999999.0,
    image: require("../assets/images/1.jpg"),
    detail: "Chuối organic"
  },
  {
    id: 2,
    name: "Red Apple",
    price: 4900009.0,
    image: require("../assets/images/2.jpg"),
    detail: "Táo đỏ"
  },

  // 👇 thêm best selling vào đây
  {
    id: 3,
    name: "cà meo",
    price: 200.9,
    image: require("../assets/images/7.jpg"),
    detail: "Cà meo ngon"
  },
  {
    id: 4,
    name: "Gừng meo",
    price: 300.8,
    image: require("../assets/images/gung.png"),
    detail: "Gừng thơm"
  }
];

  // 🔹 Tìm sản phẩm theo id
  const product = products.find(item => item.id === Number(id));

  // 🔹 Nếu không có data
  if (!product) {
    return <Text>Không tìm thấy sản phẩm</Text>;
  }

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      
      {/* IMAGE */}
      <Image
        source={product.image}
        style={{ width: "100%", height: 260, resizeMode: "cover" }}
      />

      {/* BACK BUTTON */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: "absolute",
          top: 40,
          left: 20,
          backgroundColor: "#fff",
          borderRadius: 20,
          padding: 8,
        }}
      >
        <Ionicons name="arrow-back" size={22} />
      </TouchableOpacity>

      {/* CONTENT */}
      <View style={{ padding: 20 }}>
        
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          {product.name}
        </Text>

        <Text style={{ color: "#777", marginTop: 4 }}>
          1kg, Price
        </Text>

        {/* Quantity + Price */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          {/* Quantity */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <TouchableOpacity
              onPress={decrement}
              style={{
                width: 35,
                height: 35,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>-</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 18 }}>{quantity}</Text>

            <TouchableOpacity
              onPress={increment}
              style={{
                width: 35,
                height: 35,
                backgroundColor: "#53B175",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Ionicons name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* PRICE */}
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>
            ${totalPrice}
          </Text>
        </View>

        {/* Product Detail */}
        <Text style={{ marginTop: 25, fontSize: 18, fontWeight: "bold" }}>
          Product Detail
        </Text>

        <Text style={{ color: "#777", marginTop: 8 }}>
          {product.detail}
        </Text>

        {/* Nutritions */}
        <Text style={{ marginTop: 25, fontSize: 18, fontWeight: "bold" }}>
          Nutritions
        </Text>

        <View
          style={{
            marginTop: 10,
            backgroundColor: "#eee",
            width: 70,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text>100gr</Text>
        </View>

        {/* Review */}
        <Text style={{ marginTop: 25, fontSize: 18, fontWeight: "bold" }}>
          Review
        </Text>

        <Text style={{ marginTop: 10, fontSize: 20, color: "#ff9900" }}>
          ★★★★★
        </Text>

        {/* Add To Basket */}
        <TouchableOpacity
          style={{
            marginTop: 30,
            backgroundColor: "#53B175",
            paddingVertical: 15,
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Add To Basket
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}