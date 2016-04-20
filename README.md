# tp.Dialog
###tp.Dialog 是用于微信的弹窗，5种不同的弹窗形式
>###alert();


    tp.Dialog.alert({

            content: "手机号码错误",
            
            success: function () {
            
                console.log("手机号码错误");
                
            }
            
        });
     
 
>###confirm();


    tp.Dialog.confirm({
    
            content: "是否继续？",
            
            cancel: function () {
            
                console.log("取消");
                
            },
            
            success: function () {
            
                console.log("继续");
                
            }
            
        });
   
   
   
   >###toast();


     tp.Dialog.toast();
    

>###loading();

    var loadingCtrl=tp.Dialog.loading({

        isshow:false
    });

    function loading_open(){
    
        loadingCtrl.open();
        
        setTimeout(function(){
        
            loading_close();
            
        },2000);
        
    }


    function loading_close(){
    
        loadingCtrl.close();
        
    }
    
    
  >###actionsheet();  
  
     tp.Dialog.actionsheet({
            cells: [
                {
                    text: "选我吧",
                    success: function () {
                        console.log("选我吧");
                    }
                },
                {
                    text: "选他吧",
                    success: function () {
                        console.log("选他吧");
                    }
                },
                {
                    text: "选人吧",
                    success: function () {
                        console.log("选人吧");
                    }
                },
                {
                    text: "选xx吧",
                    success: function () {
                        console.log("选xx吧");
                    }
                },
                {
                    text: "asdasdasdasdasdasdasd选他吧",
                    success: function () {
                        console.log("asdasdasdasdasdasdasd选他吧");
                    }
                }
            ],
            cancel_callback: function () {
                console.log("已经取消");
            }
        });
