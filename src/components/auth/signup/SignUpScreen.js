import React,{useState,useEffect,useContext} from 'react';
import {Text} from 'react-native';
import AuthComponent from '../../common/auth/AuthComponent';
import TextInputComponent  from '../../common/base/TextInputComponent';

import Context from '../../../context/Context';
import urls from '../../../api/urls';
import text from '../../../text/text';

const SignUpScreen = (props) =>{
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [token,setToken] = useState(null);
    const [initialData,setInitialData] = useState([]);
    const [isAuthLog,setIsAuthLog]= useState(true);
    const [fetchUrl,setFetchUrl] = useState (urls.auth.login);
    const [error,setError] = useState(null)
    const gettingInput1 = (val) => setUsername(val);
    const gettingInput2 = (val) => setEmail(val);
    const gettingInput3 = (val) => setPassword(val);

    const {tokenContext,isAuthenticatedContext,settingUser,settingContextToken,setAuthenticationContext} = useContext(Context)
    const changeAuthScreen = ()=>{
        setFetchUrl(isAuthLog?urls.auth.signup : urls.auth.login );
        setIsAuthLog(!isAuthLog);
    }
    const signUpFunc = async () => {
        try{
        const obj = isAuthLog ? {"user": {"email": email, 
                                    "password": password
                                }}: 
                            {"user": {"email": email, 
                                "password": password, 
                                "display_name": username
                            }};
         let  data  = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
         },
        body: JSON.stringify(obj)
        });
        let jsonData = await  data?.json();
        let tok = data?.headers?.map?.authorization;
        tok = tok?.split(" ");
        setToken(tok[1]);
        settingContextToken(tok[1]);
        setAuthenticationContext();
        settingUser(jsonData);
    }catch(e){
        console.log("this is the error ",e);
        setError(e.message);
    }
    }
    return (
        <AuthComponent title={text.auth.signUp}
            onChangeText1={gettingInput1} 
            onChangeText2={gettingInput2}
            onChangeText3={gettingInput3} 
            error ={error}
            placeholder1 ={text?.auth?.displayName}
            placeholder2 = {text?.auth?.email}
            placeholder3 = {text?.auth?.password}
            value1 = {username}
            showingDisplayNameField={!isAuthLog}
            value2 = {email}
            value3 ={password}
            secureTextEntry3={true}
            keyboardType={'email-address'}
            func={signUpFunc}
            comp={true} 
            buttonTitle= {isAuthLog?  text?.auth?.login : text?.auth?.signUp}
            alternative= {isAuthLog?  text?.auth?.createAccount : text?.auth?.SigninAccount}
            textPress={changeAuthScreen}
        />
    )
}
export default SignUpScreen;