const Counter = {
    data(){
        return{
            counter:0,
            message:new Date()
        }
    },
    mounted(){
        setInterval(() =>{
            this.counter++
        },1000)
    }
}
const AttributeBinding = {
    data(){
        return {
            message: 'You loaded this page on'+new Date().toLocaleString()
        }
    }
}
const EventHanding = {
    data(){
        return{
            message:'Hello vue.js!',
            isStatus: true,
            status:'nomal'
        }
    },
    methods:{
        reverseMessage(){
            this.isStatus = !this.isStatus 
            this.message = this.message
            .split('')
            .reverse()
            .join('')
            // if(this.isStatus == false){
            //     this.status = 'reverse'
            // }else{
            //     this.status = 'nomal'
            // }
            //三項演算子は条件をちゃんと書く。
            //this.isStatus 「「「== true」」」
            this.status = this.isStatus == true ? 'nomal' : 'reverse'
        }
    }
}
Vue.createApp(Counter).mount('#counter')
Vue.createApp(AttributeBinding).mount('#bind-attribute')
Vue.createApp(EventHanding).mount('#event-handling')