import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default function Home() {
  const router = useRouter();

  // 🔹 Style nút dùng chung
const addButtonStyle: ViewStyle = {
  position: 'absolute',
  bottom: 15,
  right: 15,
  width: 35,
  height: 35,
  borderRadius: 8,
  backgroundColor: '#53B175',
  justifyContent: 'center',
  alignItems: 'center',
};

  // 🔹 Component nút +
 const AddButton = ({ id }: { id: number }) => (
  <TouchableOpacity
    style={addButtonStyle}
    onPress={() =>
      router.push({
        pathname: "../detailCategory",
        params: { id }
      })
    }
  >
    <Ionicons name="add" size={20} color="#fff" />
  </TouchableOpacity>
);

  const products = [
    { id:1, name:'Organic Bananas', price:'$4999999.0', image:require('../assets/images/1.jpg') },
    { id:2, name:'Red Apple', price:'$4900009.0', image:require('../assets/images/2.jpg') },
  ];

  const bestSelling = [
    { id: 3, name:"cà meo", price:"$200.9", image:require('../assets/images/7.jpg') },
    { id: 4, name:"Gừng meo", price:"$300.8", image:require('../assets/images/gung.png') }
  ];
  
const groceries = [
  {
    id: 1,
    name: "Pulses",
    image: require("../assets/images/hat.png"),
    bg: "#EDE0D4"
  },
  {
    id: 2,
    name: "Rice",
    image: require("../assets/images/gao.png"),
    bg: "#DDE5E2"
  }
];
  const banner = require('../assets/images/6.jpg');
  const logo = require('../assets/images/logo.jpg');

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* LOGO */}
      <View style={{ width:'100%', alignItems:'center', marginTop:0 }}>
        <Image source={logo} style={{ width:30, height:30, borderRadius:5}} />
        <Text style={{ fontSize:20, fontWeight:'bold', marginTop:0 }}>
          Hé lô 
        </Text>
      </View>

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

      {/* BANNER */}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <Image
          source={banner}
          style={{
            width: WIDTH - 30,
            height:100,
            marginHorizontal:15,
            borderRadius:15
          }}
        />
      </ScrollView>

      {/* EXCLUSIVE */}
      <Text style={{ fontSize:18, fontWeight:'bold', margin:15 }}>
        Exclusive Offer
      </Text>

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
            <Image
              source={item.image}
              resizeMode="contain"
              style={{ width:100, height:100, alignSelf:'center' }}
            />

            <Text style={{ marginTop:10, fontWeight:'bold' }}>
              {item.name}
            </Text>
            <Text style={{ color:'#888' }}>1kg, Price</Text>
            <Text style={{ fontWeight:'bold', marginTop:5 }}>
              {item.price}
            </Text>

            {/* Nút + dùng chung */}
            <AddButton id={item.id} />

          </View>
        ))}
      </View>
      <Text style={{ fontSize:18, fontWeight:'bold', margin:15 }}>
  Groceries
</Text>
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{ paddingLeft:15 }}
>
  {groceries.map(item => (
    <View
      key={item.id}
      style={{
        height: 130,
        width: 280,
        backgroundColor: item.bg,
        borderRadius: 20,
        marginRight: 15,
        flexDirection:'row',
        alignItems:'center',
        padding:15
      }}
    >
      <Image
        source={item.image}
        style={{ width:60, height:60, marginRight:15 }}
      />

      <Text style={{
        fontSize:18,
        fontWeight:'bold'
      }}>
        {item.name}
      </Text>
    </View>
  ))}
</ScrollView>

      {/* BEST SELLING */}
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
        marginTop:25
      }}>
        <Text style={{ fontSize:18, fontWeight:'bold' }}>
          Best Selling
        </Text>
        <Text style={{ color:'#53B175' }}>See all</Text>
      </View>
      

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

            <Text style={{ marginTop:10, fontWeight:'bold' }}>
              {item.name}
            </Text>
            <Text style={{ color:'#888' }}>1kg, Price</Text>
            <Text style={{ fontWeight:'bold', marginTop:5 }}>
              {item.price}
            </Text>
            <AddButton id={item.id} />

          </View>
        ))}
      </View>

    </ScrollView>
  );
}