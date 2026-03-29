import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function DetailCategory() {

  const { id } = useLocalSearchParams();

  // Fake data — bạn có thể thay bằng API hoặc dữ liệu thật
  const product = {
    name: "Naturel Red Apple",
    price: "$4.99",
    image: require("../assets/images/2.jpg"),
    detail:
      "Apples are nutritious. Apples may be good for weight loss. Apples may be good for your heart. As part of a healthy and varied diet.",
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>

      {/* IMAGE */}
      <Image
        source={product.image}
        style={{ width: "100%", height: 260, resizeMode: "cover" }}
      />

      {/* BACK BUTTON */}
      <TouchableOpacity
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
        <Text style={{ color: "#777", marginTop: 4 }}>1kg, Price</Text>

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

            <Text style={{ fontSize: 18 }}>1</Text>

            <TouchableOpacity
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
            {product.price}
          </Text>
        </View>

        {/* Product Detail */}
        <Text
          style={{
            marginTop: 25,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Product Detail
        </Text>
        <Text style={{ color: "#777", marginTop: 8 }}>{product.detail}</Text>

        {/* Nutritions */}
        <Text
          style={{
            marginTop: 25,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
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
        <Text
          style={{
            marginTop: 25,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
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