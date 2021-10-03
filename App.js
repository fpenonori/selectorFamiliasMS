import React, {useEffect, useState} from 'react';
import { StyleSheet, 
  View,  
  TextInput, 
  FlatList, 
  ActivityIndicator, 
  Platform, 
  SafeAreaView} from 'react-native';
import Tarjeta from './Components/Tarjeta';
export default function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [waitCursor, setWaitCursor] = useState(true);
  useEffect(() => {
    buscarDatos();
  }, [])

  const buscarDatos = () => {
    fetch('https://randomuser.me/api?results=1')
    .then( res => res.json())
    .then(resultado => {
      setUsuarios(resultado.results);
      setUsuariosFiltrados(resultado.results);
      setWaitCursor(false);
    })
  }

  const searchFilter = (texto) => {
    if(texto){
      const newData = usuarios.filter((item) => item.name.first.includes(texto));
      setUsuariosFiltrados(newData);
    }
    else{
      setUsuariosFiltrados(usuarios);
    }
  }

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.buscadorFamilia}>
          <TextInput style={styles.input}
          onChangeText={texto => searchFilter(texto)}
          placeholder = "Ingrese nombre de la familia"
          placeholderTextColor = "#000000"
          />
        </View>
        <View style={styles.flatList}>
          {   waitCursor
            ? <ActivityIndicator size={70} color='blue' animating={true}/>
            : <FlatList 
              data={usuariosFiltrados}
              contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
              ItemSeparatorComponent={() => <View style={{height: 10, width:'100%'}}/>}
              renderItem={ ({item}) => <Tarjeta user={item}/>} keyExtractor={(item, index) => index.toString()}/>
          }
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: "white"
  },

  input:{
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 20,
    height: 40
  },

  texto:{
    fontSize: 20,
  },

  flatList: {
    flex: 7,
    justifyContent:'center',
  },

  buscadorFamilia: {
    flex: 1,
    justifyContent: 'center',
  },

  droidSafeArea: {
    flex: 1,
    backgroundColor: '#036095',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },

});
