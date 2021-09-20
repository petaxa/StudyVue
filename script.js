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
Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
    data(){
        return {
            message: 'You loaded this page on'+new Date().toLocaleString()
        }
    }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')

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
Vue.createApp(EventHanding).mount('#event-handling')

const ContidionalRendering = {
    data(){
        return{
            seen:true
        }
    },
    methods:{
        toggleSeen(){
            this.seen = !this.seen
        }
    }
}
Vue.createApp(ContidionalRendering).mount('#conditional-rendering')

const ListRendering = {
    data(){
        return {
            todos:[
                {text:'Learn JS'},
                {text:'Learn Vue'},
                {text:'Build something awesome'},
                {color:'red'},
                {color:'blue'}
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')

const ComponentsApp = {
    data(){
        return{
            groceryList:[
                {id:0,text:'vegetables'},
                {id:1,text:'cheese'},
                {id:2,text:'whatever else humans are supposed to eat'}
            ]
        }
    }
}


//アプリケーションとコンポーネント
//アプリケーションインスタンスを作成
const app = Vue.createApp(ComponentsApp)
//アプリケーション内のコンポーネントが使える色々を登録
//同じインスタンスを返すのでチェーン可能
    .component('SearchInput',SearchInputComponent)
    .directive('focus',FocusDirective)
    .use(LocalePlugin)
//data,props,methodsなどをコンポーネントオプション
//ユーザ定義のプロパティを追加するオプション
app.component('todo-item',{
    props:['todo'],
    template:`<li>{{todo.text}}</li>`
})
//mountはルートコンポーネントを返す
app.mount('#components-app')

Vue.createApp({
    data(){
        return{count:1}
    },
    //ライフサイクルフック
    //createdフック：インスタンス作成後にコードを実行する。
    created(){
        console.log('count is:'+this.count)
    }
})




