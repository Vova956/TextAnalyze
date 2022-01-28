const TopicDTO = require('../../DataBase/DTO/TopicDTO');

class AnalyzeService{

    async analyze(text, topics){
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

        for(let i  = 0 ;i < topic.length; i++){
            arr[i] = 0;
            arr[i].name = topics[i].name;
            arr[i].points = topics[i].points;
        }

        var bestTopics = [];

        for(let i = 0;i < 3 && i < Math.floor(topics.length/2); i++) {
            var buff = arr[0];
            for(let j = 1; j < topics.length; j++){
                
            }
        }


    }


}
