const TopicDTO = require('../../DataBase/DTO/TopicDTO');
const https = require('https');
var XMLHttpRequest = require('xhr2');

const sendHttpRequest = (method,url,data) =>{
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json'

        if(data){
            xhr.setRequestHeader('Content-Type','application/json')
        }

        xhr.onload = () =>{
            resolve(xhr.response)
        }

        xhr.onerror = () =>{
            reject('Something went wrong!')
        }

        xhr.send(JSON.stringify(data))
    });
    return promise;
}

class AnalyzeService{

    async analyze(text){

        var data = {};
        var result = null; 
        await sendHttpRequest('GET','http://localhost:3000/data/getTopics',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })

        const topics = result.responseData.result;

        const allWords = text.split(' ');   
        var allPoints = 0;

        for(let i = 0 ; i < topics.length; i++){
            topics[i].points = 0;
        }

        for(let i = 0 ;i < allWords.length; i++){
            for(let j = 0; j < topics.length; j++){
                for(let k = 0; k < topics[j].words.length; k++){
                    if(allWords[i] === topics[j].words[k]){
                        topics[j].points++;
                        allPoints++;
                        break;
                    }
                }
            }
        }

        var arr = [];

        for(let i  = 0 ;i < topics.length; i++){
            arr[i] = [];
            arr[i][0] = topics[i].name;
            arr[i][1] = topics[i].points;
        }

        var bestTopics = [];

        for(let i = 0;i < 3 && i < Math.floor(topics.length/2+0.5); i++) {
            var buffIndex = 0;
            for(let j = 1; j < topics.length; j++){
                if(arr[buffIndex][1] < arr[j][1]){
                    buffIndex = j;
                }
            }
            bestTopics[i] = (arr[buffIndex][0]);
            arr[buffIndex][1] = -1;
        }

        return bestTopics;
    }
}

module.exports = new AnalyzeService();
