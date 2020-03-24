var drop=new Vue({
    el:"#drop",
    data:{
        msg:"hello",
        interval:"",
        top:50,
        count:0
    },
    methods:{

        tap(){

            this.count++;

            if(this.count%2==0){
                this.tapclose()
            }else if(this.top<=150){
                this.tapopen();
            }

        },
       
        tapopen(){
            $('#waterflow')[0].style.backgroundColor="blue";
            this.interval=setInterval(()=>{
                
                this.top++;
                $('#boxin')[0].style.top=this.top+"%";

                if(this.top==151){
                    console.log("wdfaw")
                    clearInterval(this.interval);
                    $('#waterflow')[0].style.backgroundColor="white";
                }

            },100);

        },

        tapclose(){
            $('#waterflow')[0].style.backgroundColor="white";
            clearInterval(this.interval);

        }

    },
    created(){
        console.log("hello");
    }
});