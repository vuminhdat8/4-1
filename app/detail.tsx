import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Explore() {

  const router = useRouter();

  const categories = [
    { id:1, name:'Fresh Fruit', image:require('../assets/images/8.jpg') },
    { id:2, name:'Cooking Oil', image:require('../assets/images/9.jpg') },
    { id:3, name:'Meat & Fish', image:require('../assets/images/5.jpg') },
    { id:4, name:'Bakery & Snack', image:require('../assets/images/banhmi.png') },
    { id:5, name:'Dairy', image:require('../assets/images/11.jpg') },
    { id:6, name:'Beverages', image:require('../assets/images/12.jpg') },
  ];

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* TITLE */}
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        margin:15
      }}>
        Find Products
      </Text>

      {/* SEARCH */}
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#f2f2f2',
        paddingHorizontal:15,
        marginHorizontal:15,
        borderRadius:15
      }}>
        <Ionicons name="search" size={18} color="#777" style={{ marginRight:8 }} />
        <TextInput
          placeholder="Search Store"
          style={{
            paddingVertical:12,
            flex:1
          }}
        />
      </View>

      {/* GRID */}
      <View style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:15
      }}>

        {categories.map(item => (
          <View
            key={item.id}
            style={{
              width:'48%',
              backgroundColor:'#f9f9f9',
              borderRadius:20,
              padding:15,
              marginBottom:15,
              alignItems:'center',
              position:'relative'
            }}
          >

            {/* IMAGE (không còn chức năng nhấn nữa) */}
            <Image
              source={item.image}
              style={{ width:80, height:80 }}
            />

            {/* PLUS BUTTON — click để chuyển trang */}
            <TouchableOpacity
              onPress={() => router.push(`/detail?id=${item.id}`)}
              style={{
                position:'absolute',
                top:10,
                right:10,
                backgroundColor:'#53B175',
                width:30,
                height:30,
                borderRadius:50,
                justifyContent:'center',
                alignItems:'center'
              }}
            >
              <Ionicons name="add" size={20} color="#fff" />
            </TouchableOpacity>

            {/* NAME */}
            <Text style={{
              marginTop:10,
              fontWeight:'bold'
            }}>
              {item.name}
            </Text>

          </View>
        ))}

      </View>

    </ScrollView>
  );
}