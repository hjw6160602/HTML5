/**
 * Created by SaiDicaprio on 19/08/27.
 */

var musicData = [
    {id:1, name:"Russ-Psycho(Pt.1)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.1).mp3'},
    {id:2, name:"Russ-Psycho(Pt.2)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.2).mp3'},
    {id:3, name:"Russ-Psycho(Pt.3)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.3).mp3'},
    {id:4, name:"Russ-Psycho(Pt.4)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.4).mp3'},
];

new Vue({
    el:'#app',
    data(){
        return{
            musicData:musicData
        }
    },
    computed:{
        getCurrentSongSrc:function(){
            return this.musicData[2].songSrc
        }
    },
    methods:{

    }
})








