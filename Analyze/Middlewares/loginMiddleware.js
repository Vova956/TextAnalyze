const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";

        if(data){
            xhr.setRequestHeader("Content-Type", "application/json");
        }

        xhr.onload = () =>{
            resolve(xhr.response);
        }

        xhr.onerror = () =>{
            reject("Oops! Something went wrong!");
        }

        xhr.send(JSON.stringify(data));
    });
    return promise;
}

module.exports = (err,req,res,next) => {
    try{
        var data = {"login": userDTO.login, "password": userDTO.password,"admin" : true};
        var result = null; 
  
        await sendHttpRequest("GET", "http://localhost:3000/auth/findAdmin", data).then(responseData =>{
          result = {responseData};
        })
        .catch(error => {
          Logger.error(error);
        })

        if(!result){
            throw new Error("|AUTH ERROR| Current user is not Admin");
        }
        

        next();
    }catch(e){
        return next();
    }

    next();
}