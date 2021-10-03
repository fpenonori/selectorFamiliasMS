import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function Tarjeta(props){
    
    return(
        <View style={styles.tarjeta}>
            <View style={styles.viewImage}>
                <Image style={styles.imagen} source={{uri: props.user.picture.medium}}/>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.texto}>{props.user.name.first}</Text>
                <Text style={styles.texto}>{props.user.name.last}</Text>    
                <Text style={styles.texto}>{new Date(props.user.dob.age).getFullYear()} ({props.user.dob.age})</Text>
            </View>
            <View style={styles.viewImage}>
                <Image style={styles.imagenLupa} source={require('../src/magnifying-glass.png')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
texto:{
    fontSize: 20,
  },
  tarjeta:{
      width: 350,
      height: 130,
      backgroundColor: '#00add8',
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      shadowColor: '#000',
  },

  imagen:{
      borderRadius: 100,
      width: 100,
      height:100
  },

  imagenLupa:{
    width: 50,
    height:50
  },

  viewImage:{
    flex: 1,
    alignItems: 'center'
  },

  viewText:{
      flex: 1
  }
});