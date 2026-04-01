import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { addToCart } from '../cartData';

export default function Beverages() {

  const drinks = [
    { id:1, name:'Diet Coke', price:'$2.99', image:require('../assets/images/coke.png') },
    { id:2, name:'Sprite', price:'$2.49', image:require('../assets/images/sprite.png') },
    { id:3, name:'Nuoc tao', price:'$3.99', image:require('../assets/images/nuoctao.png') },
    { id:4, name:'Apple Juice', price:'$3.49', image:require('../assets/images/16.jpg') },
    { id:5, name:'CoCa', price:'$3.79', image:require('../assets/images/3.jpg') },
    { id:6, name:'Pessi', price:'$4.19', image:require('../assets/images/pessi.png') },
  ];

  return (
    <ScrollView style={{ flex:1, backgroundColor:'#fff' }}>

      {/* TITLE */}
      <Text style={{
        fontSize:22,
        fontWeight:'bold',
        margin:20
      }}>
        Beverages
      </Text>

      {/* GRID */}
      <View style={{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        paddingHorizontal:15
      }}>

        {drinks.map(item => (
          <View 
            key={item.id} 
            style={{
              width:'48%',
              backgroundColor:'#fff',
              borderRadius:20,
              padding:15,
              marginBottom:18,
              shadowColor:'#000',
              shadowOpacity:0.1,
              shadowRadius:5,
              shadowOffset:{ width:0, height:2 },
              elevation:4,
            }}
          >

            {/* IMAGE */}
            <Image
              source={item.image}
              style={{
                width:110,
                height:110,
                alignSelf:'center',
                resizeMode:'contain'
              }}
            />

            {/* NAME */}
            <Text style={{
              marginTop:10,
              fontWeight:'bold',
              fontSize:16,
              textAlign:'center'
            }}>
              {item.name}
            </Text>

            {/* SUB */}
            <Text 
              style={{ 
                color:'#888', 
                textAlign:'center',
                marginTop:3
              }}
            >
              1L, Price
            </Text>

            {/* PRICE + BUTTON */}
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between',
              alignItems:'center',
              marginTop:12
            }}>

              <Text style={{ fontWeight:'bold', fontSize:16 }}>
                {item.price}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  addToCart(item);
                  alert('Added to cart');
                }}
                style={{
                  backgroundColor:'#53B175',
                  width:35,
                  height:35,
                  borderRadius:10,
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Text style={{
                  color:'#fff',
                  fontSize:20,
                  fontWeight:'bold'
                }}>
                  +
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        ))}

      </View>

    </ScrollView>
  );
}