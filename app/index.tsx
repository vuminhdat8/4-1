import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
const WIDTH = Dimensions.get('window').width;

export default function Home() {
  const router = useRouter();

  const products = [
    { id:1, name:'Organic Bananas', price:'$4999999.0', image:require('../assets/images/1.jpg') },
    { id:2, name:'Red Apple', price:'$4900009.0', image:require('../assets/images/2.jpg') },
  ];

  const banner = require('../assets/images/6.jpg');
  const logo = require('../assets/images/logo.jpg');

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

{/* LOGO */}
<View style={{ width:'100%', alignItems:'center', marginTop:20 }}>
  <Image source={logo} style={{ width:80, height:80, borderRadius:20 }} />
  <Text style={{ fontSize:20, fontWeight:'bold', marginTop:10 }}>
    Hé lô <Ionicons name="paw" size={28} color="#53B175" />
  </Text>
</View>

{/* SEARCH */}
<View style={{ padding:15 }}>
  <TextInput
    placeholder="Search Store"
    style={{ backgroundColor:'#f2f2f2', padding:15, borderRadius:15 }}
  />
</View>

{/* BANNER */}
<ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
  <Image
    source={banner}
    style={{
      width: WIDTH - 30,
      height:150,
      marginHorizontal:15,
      borderRadius:15
    }}
  />
</ScrollView>

{/* EXCLUSIVE */}
<Text style={{ fontSize:18, fontWeight:'bold', margin:15 }}>Exclusive Offer</Text>

<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:15
}}>
  {products.map(item => (
    <View
      key={item.id}
      style={{
        width:'48%',
        backgroundColor:'#fff',
        borderRadius:20,
        padding:15,
        elevation:5,
        marginBottom:10
      }}
    >
      <Image source={item.image} style={{ width:100, height:100, alignSelf:'center' }} />

      <Text style={{ marginTop:10, fontWeight:'bold' }}>{item.name}</Text>
      <Text style={{ color:'#888' }}>1kg, Price</Text>
      <Text style={{ fontWeight:'bold', marginTop:5 }}>{item.price}</Text>

      {/* ➕ BUTTON */}
<TouchableOpacity
  onPress={() =>
    router.push({
      pathname: "../detailCategory",
      params: { id: item.id }
    })
  }
  style={{
    position:'absolute',
    top:10,
    right:10,
    backgroundColor:'#53B175',
    width:30,
    height:30,
    borderRadius:999,
    justifyContent:'center',
    alignItems:'center'
  }}
>
  <Ionicons name="add" size={20} color="#fff" />
</TouchableOpacity>

    </View>
  ))}
</View>

{/* BEST SELLING */}
<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:15,
  marginTop:25
}}>
  <Text style={{ fontSize:18, fontWeight:'bold' }}>Best Selling</Text>
  <Text style={{ color:'#53B175' }}>See all</Text>
</View>

{(() => {

  const bestSelling = [
    { id: 1, name:"cà meo", price:"$200.9", image:require('../assets/images/7.jpg') },
    { id: 2, name:"Gừng meo", price:"$300.8", image:require('../assets/images/gung.png') }
  ];

  return (
    <View
      style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:10
      }}
    >
      {bestSelling.map(item => (
        <View
          key={item.id}
          style={{
            width:'48%',
            backgroundColor:'#fff',
            borderRadius:20,
            padding:15,
            marginBottom:15,
            elevation:5
          }}
        >
          <Image
            source={item.image}
            style={{ width:90, height:90, alignSelf:'center' }}
          />

          <Text style={{ marginTop:10, fontWeight:'bold' }}>{item.name}</Text>
          <Text style={{ color:'#888' }}>1kg, Price</Text>
          <Text style={{ fontWeight:'bold', marginTop:5 }}>{item.price}</Text>

          {/* ➕ BUTTON */}
          <TouchableOpacity
            style={{
              position:'absolute',
              bottom:15,
              right:15,
              width:35,
              height:35,
              borderRadius:20,
              backgroundColor:'#53B175',
              justifyContent:'center',
              alignItems:'center',
            }}
            onPress={() => router.push(`/detail?id=${item.id}`)}
          >
            <Text style={{ color:'#fff', fontSize:20 }}>+</Text>
          </TouchableOpacity>

        </View>
      ))}
    </View>
  );

})()}

    </ScrollView>
  );
}