import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation =useNavigation();

    
  return (
   <KeyboardAvoidingView style={
    styles.container}
    behavior='padding'
    >
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={ text => setEmail(text)} 
            style={styles.input}
            />
             <TextInput 
             style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={ text => setPassword(text)} 
            secureTextEntry
            />


        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={(e)=>{ navigation.navigate('Home')}}
            style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>


            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{}}
            style={[styles.button , styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>


            </TouchableOpacity>

        </View>

   </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'silver'
    },
    inputContainer:{
        width:"80%",
        marginBottom:"10%"
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
        marginBottom:'5%'
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'40'
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16

    },
    button:{
        backgroundColor:'#0782f9',
        width:'100%',
        padding:15,
        borderRadius: 10,
        alignItems:'center'


    },
    buttonOutline:{
        backgroundColor:"white",
        marginTop:5,
        borderColor:"#0782f9",
        borderWidth:2
    },
    buttonOutlineText:{   
        color:'#0782f9',
    fontWeight:'700',
    fontSize:16
        
    },
    





})