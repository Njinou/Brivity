import React,{useEffect,useContext,useState} from 'react';
import Context from '../../context/Context';
import {Text, View,TextInput,Image,Pressable,StyleSheet,Modal} from 'react-native';
// <ButtonComponent title="Next" textStyle   style/>
import ButtonComponent from '../common/base/ButtonComponent';
import ListItemsComponent from '../common/list/ListItemsComponent';
import plus from '../../ressources/images/plus.jpeg';

const DashBoardScreen = (props) =>{
    
    const [titlePost,setTitlePost] = useState('');
    const [bodyPost,setBodyPost] = useState('');
    const [nbrePage,setNbrePages] = useState([1,2,3])
    const [data,setData] = useState ([]);
    const [pagination,setPagination] = useState(1);
    const [addPost,setAddPost] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const {tokenContext,user,isAuthenticatedContext,settingContextToken,setAuthenticationContext} = useContext(Context) 
    const GettingBodyPost = (val) => {
        setBodyPost(val); 
    }
    const GettingTitlePost = (val) => {
        setTitlePost(val); 
    }
    
    const fetchData = async (pagi) =>{
        console.log("Stand down",tokenContext);
        let posts = await fetch(`https://brivity-react-exercise.herokuapp.com/posts?page=${pagi}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "authorization": `Bearer + ${tokenContext}` 
        },
        });
        let fetchPosts = await posts.json();
        setData(fetchPosts.posts);
    }

    const createPost = async () =>{
        let obj = {"post": {"title": titlePost, "body": bodyPost}};
        console.log("carlos",obj)
        let postCreation = await fetch('https://brivity-react-exercise.herokuapp.com/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "authorization": `Bearer ${tokenContext}` 
        },
        body:JSON.stringify(obj)
        });
        let createPost = await postCreation.json();
        console.log(createPost);
        setModalVisible(!modalVisible)
    }

    const nextPage = async (pag) =>{
        setPagination(pag);
        await fetchData(pag);
    }
    useEffect( ()=>{
        fetchData(pagination);
    },[data])
    incrPage = (bool) => {
        let temp = [...nbrePage];
            let tempVal = temp[temp.length-1];
            tempVal =  bool? ++tempVal: temp.length >3 && --tempVal ;
           bool? temp.push(tempVal): temp.length >3 && temp.pop();
             setNbrePages(temp);
    }
    return (
            <View style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                supportedOrientations={['portrait', 'landscape']}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <Text style={styles.modalText}>Create Post </Text>
                  <TextInput 
                        multiligne={true}   
                        numberOfLines={4} 
                        value={titlePost} 
                        style={{
                            //flex:1,
                            borderColor:'black',
                            borderWidth:2,
                            borderRadius:5,
                            padding:10,
                            alignSelf:'stretch'}} 
                        placeholder= "Title for Post here "  
                        onChangeText ={GettingTitlePost}
                    />
                      
                    <TextInput 
                        multiligne={true}   
                        numberOfLines={4} 
                        value={bodyPost} 
                        style={{
                            //flex:1,
                            marginVertical:10,
                            borderColor:'black',
                            borderWidth:2,
                            borderRadius:5,
                            padding:10,
                            alignSelf:'stretch'}} 
                        placeholder= "Body for Post here "  
                        onChangeText ={GettingBodyPost}
                    />
                      <View style={{margin:10,flexDirection:'row',alignItems:'center'}}>
                    <Pressable onPress={()=>setModalVisible(!modalVisible)}>
                        <Text style={{color:'black',fontSize:15,fontWeight:'bold'}}>
                            Cancel
                        </Text>
                    </Pressable>
                    <Pressable onPress={createPost}>
                        <View style={{backgroundColor:'black',margin:10,padding:10,borderRadius:8}}>
                        <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>
                            Create Post
                        </Text>
                        </View>
                    </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
              <View style={{flex:1}}>
                  <View style={{alignSelf:'flex-start',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <Image style={{width:30, height:30,margin:10,borderRadius:25}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} />
                    <Text>{user?.display_name}</Text>
                </View>
                    
                  <Pressable  style={{width:50,height:50,alignSelf:'flex-end'}} onPress={()=> setModalVisible(!modalVisible)}>
                    <Image style={{alignSelf:'flex-end',width:50, height:50,marginRight:25,borderRadius:25}} source={plus} />
                </Pressable>
       
        <ListItemsComponent data={data}/>
            <View  style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <Pressable onPress={() =>incrPage(false)}>
                    <Text>Prev </Text>
                </Pressable> 
            { nbrePage.map( page =><Text key={page} style={{textDecorationLine: page === pagination? 'underline': 'none',fontWeight: page === pagination? 'bold':'normal'}} onPress={async ()=> await nextPage(page)}>{page} </Text>)
            }
               <Pressable onPress={()=>incrPage(true)}>
                    <Text>Next</Text>
                </Pressable> 
            </View>
        </View>
            </View>
          );
}
export default DashBoardScreen;
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent:'flex-start',
     // alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize:20,
      fontWeight:'bold'
    }
  });