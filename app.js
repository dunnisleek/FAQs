const app =Vue.createApp({
    data(){
     return{
      
      items:{
       q1:{
              title:'Do I have to allow the use of cookies?',
              content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsam, porro delectus nobis magni facilis.',
              open:false,
              img:'./image/down-arrow.png'
              
       },
       q2:{
              title:'How do I change my Page Password?',
              content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
              img:'./image/down-arrow.png',
              open:false
       },
       q3:{
              title:'What is BankID?',
              content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
              img:'./image/down-arrow.png',
              open:false
       },
       q4:{
              title:'Do I have to allow the use of cookies?',
              content:'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
              img:'./image/down-arrow.png',
              open:false
       }
      }
        
     }
    },
    
})   
     
    
app.mount('#app')