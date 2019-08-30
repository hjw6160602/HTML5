/**
 * Created by SaiDicaprio on 19/08/27.
 */

var musicData = [
    {id:1, name:"Russ-Psycho(Pt.1)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.1).mp3'},
    {id:2, name:"Russ-Psycho(Pt.2)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.2).mp3'},
    {id:3, name:"Russ-Psycho(Pt.3)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.3).mp3'},
    {id:4, name:"Russ-Psycho(Pt.4)", auth:"Russ", songSrc:'./music/Russ-Psycho(Pt.4).mp3'},
];

Vue.component('Test', {
    data(){
        return {
            msg:'Hello world!'
        }
    },
    template:
        '<div>\
            <div>{{msg}}</div> \
        </div>',

    beforeCreated:function(){
        console.log(this);
    },
    created:function(){
        console.log(this.msg);
    }
})

new Vue({
    el:'#app',
    data(){
        return{
            musicData:musicData,
            currentIndex:0
        }
    },

    computed:{
        // 计算属性默认只有getter
        getCurrentSongSrc:function(){
            set:function(newV) {
                console.log(newV);
            }
            get(newV){

            }
            return this.musicData[this.currentIndex].songSrc
        }
    },
    methods:{
        clickHandler(index){
            this.currentIndex = index;
        }
    }
})








