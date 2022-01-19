 const dataHelpers = async (obj, method,url,tokenValue, funct ) =>{
        let postCreation = await fetch(url, {
        method: method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          "authorization": `Bearer + ${tokenValue}` 
        },
        body:JSON.stringify(obj)
        });
        let result  = await postCreation.json();
        funct(result[Object.keys(result)]);
    }
export default dataHelpers;
