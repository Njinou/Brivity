import React,{useState,useEffect} from 'react';
import {Text} from 'react-native';
import AuthComponent from '../../common/auth/AuthComponent';
import TextInputComponent  from '../../common/base/TextInputComponent';

const SignUpScreen = (props) =>{
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [token,setToken] = useState(null);
    const [initialData,setInitialData] = useState([]);
    useEffect( ()=>{
        
    },[])


    const gettingInput1 = (val) => setUsername(val);
    const gettingInput2 = (val) => setEmail(val);
    const gettingInput3 = (val) => setPassword(val);
  
    const signUpFunc = async () => { //url
        const obj = {"user": {"email": email, 
        "password": password, 
        "display_name": username}};
        let  data  = await fetch('https://brivity-react-exercise.herokuapp.com/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': 'Basic '+btoa('username:password'), 
          //"authorization": "Bearer 
        
        },
        body: JSON.stringify(obj)
        });
         //setToken(data.headers.map.authorization.split(" ")[1])
        let jsonData = await  data.json();
        let tok = data.headers.map.authorization;
        tok = tok.split(" ");
        console.log("token token",tok);
        setToken(tok[1]);
        console.log("cela ne veut rien dire pour toi....  ",jsonData);
        setInitialData(jsonData);
    }

    return (
        <AuthComponent title="Sign UP" 
            onChangeText1={gettingInput1} 
            onChangeText2={gettingInput2}
            onChangeText3={gettingInput3} 
            placeholder1 = "Display Name"
            placeholder2 = "Email"
            placeholder3 = "Password"
            value1 = {username}
            value2 = {email}
            value3 ={password}
            secureTextEntry3={true}
            keyboardType={'email-address'}
            func={signUpFunc}
            comp={true} 
        />
    )
}
export default SignUpScreen;