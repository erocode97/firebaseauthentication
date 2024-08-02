import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();
    useEffect(() => {
      auth.onAuthStateChanged(user=>{
        if(user){
          navigation.navigate('Home');
        }
      })
      
      
    }, [])
    
    const handleSignup = () =>{
        auth.createUserWithEmailAndPassword(email,password).then(userCredentials=>{
            const user = userCredentials.user;
            console.log('User',user.email)
        })
        .catch(error=> alert(error.message));
    }
    const handleLogin = () =>{
      auth.signInWithEmailAndPassword(email,password).then(userCredentials=>{
          const user = userCredentials.user;
          console.log('User logined',user.email)
      })
      .catch(error=> alert(error.message));
  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
        <TextInput  style={styles.input} secureTextEntry placeholder="Password" value={password} onChangeText={text => setPassword(text)}/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={handleSignup} style={[styles.button,styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View> 
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    inputContainer:{
     width:'80%',

    },
    input:{
      backgroundColor:'white',
      paddingHorizontal:15,
      paddingVertical:10,
      marginTop:5,
      borderRadius:10,
    },
    buttonContainer:{
     width:'60%',
     marginTop:40,
    },
    button:{
      backgroundColor:'#0782f9',
      padding:15,
      alignItems:'center',
      borderRadius:10,
    },
    buttonText:{ 
     color:'white',
     fontSize:16,
    },
    outlineButton:{
     backgroundColor:'white',
     marginTop:5,
    },
    outlineButtonText:{
        color:'#0782f9',
        fontSize:16,
    }





})