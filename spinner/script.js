var drop=new Vue({
    el:"#drop",
    data:{
        element:6,
        interval:0,
        rotate:8,
        arr:[],
        table:[],
        but:"start"

    },
    methods:{
        start(){
            this.interval = setInterval(() => {
                
                this.but="stop";

                document.getElementById("spinner").style.transform="rotate("+-this.rotate+"deg)";

                this.rotate=this.rotate+18;
                this.element++;
                
                

                if(this.element==21){
                    this.element=1;
                    
                }

                if(this.rotate==360){
                    this.rotate=8;
                }

            }, 80);
        },
        stop(){

            this.but="start";

            clearInterval(this.interval);
            console.log(this.arr);
            if(this.element==20){
                this.table.push(1);
            }else if(this.element==1){
                this.table.push(21);
            }else{
                this.table.push(this.element);
            }
            
            this.arr=[];
        },

    },
    created(){
        console.log("hello");
    }
});