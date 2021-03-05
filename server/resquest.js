import axios from 'axios';
class Request {

    constructor(){
        this.params ={
            method:method
            url:uri,
            data: 'stream',
        };
    }
    start ()
        axios( this.params).then (function){
            Response.data.pipe(fs.createWriteStream)
        })
    }
}