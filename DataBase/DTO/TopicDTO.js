class TopicDTO {
    name;
    word;

    constructor(name = '', word = []) {
        
        this.name = name;

        this.word = [];
        for(let i = 0;i < word.length; i++){
            this.word[i] = word[i];
        }
    }
}

module.exports = TopicDTO;