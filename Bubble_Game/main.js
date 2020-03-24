


var drop=new Vue({
    el:"#drop",
    data:{
        msg:"hello",
        arr:[],
        colors:["black","Yellow","Pink","green","red","blue"],
        score:0,
        col:false
    },
    methods:{

        close(id,index){
            
            this.arr[index].okey=false;
           $('#'+id).remove();
           this.score++;



        },
        isCollide(a, b) {
            var ediv1 = document.getElementById(a);
            var ediv2 = document.getElementById(b);

            if(ediv1==null){
                return false;
            }
            
            if(ediv2==null){
                return false;
            }

            ediv1.top = $(ediv1).offset().top;
            ediv1.left = $(ediv1).offset().left;
            ediv1.right = Number($(ediv1).offset().left) + Number($(ediv1).width());
            ediv1.bottom = Number($(ediv1).offset().top) + Number($(ediv1).height());

            ediv2.top = $(ediv2).offset().top;
            ediv2.left = $(ediv2).offset().left;
            ediv2.right = Number($(ediv2).offset().left) + Number($(ediv2).width());
            ediv2.bottom = Number($(ediv2).offset().top) + Number($(ediv2).height());

            if (ediv1.right > ediv2.left && ediv1.left < ediv2.right && ediv1.top < ediv2.bottom && ediv1.bottom > ediv2.top)
            {
                    return true;
            }

            if (ediv1.left > ediv2.left && ediv1.top > ediv2.top && ediv1.right < ediv2.right && ediv1.bottom < ediv2.bottom)
            {
                return true;
            }

            return false;

        }

    },
    created(){
        

        var $body=$('#bubblewrap');

            var count=0;
            var index=6;
            var interval1=setInterval(() => {
                
                

                if(count==6){
                    count=0;
                }

                count++;
                index++;
                var data={
                    id:"bubble"+index,
                    top: Math.random() * 500 ,
                    left: Math.random() * 500  ,
                    height:50,
                    width:50,
                    color:this.colors[count],
                    okey:true
                }
                    this.arr.push(data);

                if(this.col){
                    alert("GAME OVER!\nYour Score is : " + this.score);
                    clearInterval(interval1);
                    window.location.reload();
                }


            }, 1000);

          
            var flag=0;
            var interval=setInterval(()=>{

                for(let i=0;i<this.arr.length-1;i++){

                    if(this.arr[i].okey==true){
                        this.arr[i].height+=10;
                        this.arr[i].width+=10;

                    }

                }

                let bubblee=0;
                for(let i=0;i<this.arr.length;i++){
                    for(let j=0;j<this.arr.length;j++){

                        if(i!=j ){
                            
                            if(this.isCollide(  this.arr[i].id,this.arr[j].id)){
                               
                                bubblee=this.arr[j].id;
                                flag=1;
                            }

                        }

                        if(flag==1){
                            break;
                          }

                      }

                      if(flag==1){
                        break;
                      }

                    }


                    if(flag==1){
                        
                        this.col=true;
                    }
              

            },200);

    }
});