import { Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import AppLoading from 'expo-app-loading';
import { useState } from 'react';

export default function Register() {
    const navigation = useNavigation();
    


      const [email, setemail] = useState('');
      const [password, setpassword] = useState('');
      const [fullname, setfullname] = useState('');
      const [nft, setnft] = useState('');
      const [mnemonic, setmnemonic] = useState('');
      const [publicAddress, setpublicAddress] = useState('');

      const _loginUser = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "action": "login",
          "email": email,
          "password": password
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://us-central1-aiot-fit-xlab.cloudfunctions.net/sharex", requestOptions)
          .then(response => response.json())
          .then(result => {console.log(result); if(result.status=="success"){navigation.navigate('Home',{userid:result.userid, name:result.name})}})
          .catch(error => console.log('error', error));
      }

        return (
            <View style={{backgroundColor:"#000", flex:1}}>
        <LinearGradient
        colors={['rgb(124, 58, 237)', 'rgb(88, 28, 135)','rgb(17, 24, 39)']}
        style={{flex:1}}
        >
            <KeyboardAwareScrollView>
            <View style={{marginVertical:'15%'}}></View>
    
            <Text style={{textAlign:'center', textAlignVertical:'center', color:"#FFF", fontWeight:'bold', fontSize:30, marginBottom:'10%', opacity:0.5}}>ShareX</Text>

            <View style={{width:'70%', backgroundColor:"#FFF", borderRadius:10, alignSelf:'center', padding:'2.5%', opacity:0.5}}>
                <TextInput placeholder="Full Name" value={fullname} onChangeText={(e)=>setfullname(e)}></TextInput>
            </View>
            <View style={{width:'70%', backgroundColor:"#FFF", borderRadius:10, alignSelf:'center', padding:'2.5%', opacity:0.5, marginTop:'5%'}}>
                <TextInput placeholder="Email address" value={email} onChangeText={(e)=>setemail(e)}></TextInput>
            </View>
            <View style={{width:'70%', backgroundColor:"#FFF", borderRadius:10, alignSelf:'center', padding:'2.5%', opacity:0.5, marginTop:'5%'}}>
                <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={(e)=>setpassword(e)}></TextInput>
            </View>
            <View style={{width:'70%', backgroundColor:"#FFF", borderRadius:10, alignSelf:'center', padding:'2.5%', opacity:0.5, marginTop:'5%'}}>
                <TextInput placeholder="ID NFT Address" value={nft} onChangeText={(e)=>setnft(e)}></TextInput>
            </View>
            <View style={{width:'70%', backgroundColor:"#FFF", borderRadius:10, alignSelf:'center', padding:'2.5%', opacity:0.5, marginTop:'5%'}}>
                <TextInput numberOfLines={5} placeholder="Mnemonic" value={mnemonic} onChangeText={(e)=>setmnemonic(e)}></TextInput>
            </View>
            <View style={{width:'70%', backgroundColor:"#FFF", borderRadius:10, alignSelf:'center', padding:'2.5%', opacity:0.5, marginVertical:'5%'}}>
                <TextInput placeholder="Public Address" value={publicAddress} onChangeText={(e)=>setpublicAddress(e)}></TextInput>
            </View>

            <TouchableOpacity onPress={()=>_loginUser()}>
                <View style={{ borderRadius:10,width:150, height:50, alignSelf:'center', backgroundColor:"#FFF", justifyContent:'center', elevation:1}}><Text style={{textAlign:'center', textAlignVertical:'center', color:"rgb(17, 24, 39)", fontWeight:'bold', fontSize:15}}>LOGIN</Text>
        </View></TouchableOpacity>
        </KeyboardAwareScrollView>
        </LinearGradient>
    </View>
    )
};