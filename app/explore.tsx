import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function Explore() {

  const router = useRouter();

  const categories = [
    { id:1, name:'Fresh Fruit', image:require('../assets/images/8.jpg') },
    { id:2, name:'Cooking Oil', image:require('../assets/images/9.png') },
    { id:3, name:'Meat & Fish', image:require('../assets/images/trung.png') },
    { id:4, name:'Bakery & Snack', image:require('../assets/images/banhmi.png') },
    { id:5, name:'Dairy', image:require('../assets/images/sua.png') },
    { id:6, name:'Beverages', image:require('../assets/images/12.jpg') },
  ];

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* TITLE */}
      <Text style={{
        fontSize:20,
        fontWeight:'bold',
        margin:15,
        textAlign:'center',
        marginBottom:0
      }}>
        Find Products
      </Text>

      {/* SEARCH */}
<View style={{ padding:15 }}>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      borderRadius: 15,
      paddingHorizontal: 15
    }}
  >
    {/* ICON */}
    <Ionicons name="search" size={20} color="#999" />

    {/* INPUT */}
    <TextInput
      placeholder="Search Store"
      style={{
        flex: 1,
        padding: 12,
        marginLeft: 10
      }}
    />
  </View>
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
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              if(item.name === 'Beverages'){
                router.push('/beverages');
              }
            }}
            style={{
              width:'48%',
              backgroundColor:'#f9f9f9',
              borderRadius:20,
              padding:15,
              marginBottom:15,
              alignItems:'center'
            }}
          >

            <Image
              source={item.image}
              style={{
                width:80,
                height:80,
                 resizeMode: "contain"
              }}
            />

            <Text style={{
              marginTop:10,
              fontWeight:'bold'
            }}>
              {item.name}
            </Text>

          </TouchableOpacity>
        ))}

      </View>

    </ScrollView>
  );
}