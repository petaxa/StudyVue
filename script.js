const Counter = {
    data() {
        return {
            counter: 0,
            message: new Date()
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    }
}
Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
    data() {
        return {
            message: 'You loaded this page on' + new Date().toLocaleString()
        }
    }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')

const EventHanding = {
    data() {
        return {
            message: 'Hello vue.js!',
            isStatus: true,
            status: 'nomal'
        }
    },
    methods: {
        reverseMessage() {
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
    data() {
        return {
            seen: true
        }
    },
    methods: {
        toggleSeen() {
            this.seen = !this.seen
        }
    }
}
Vue.createApp(ContidionalRendering).mount('#conditional-rendering')

const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Learn JS' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' },
                { color: 'red' },
                { color: 'blue' }
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')

const ComponentsApp = {
    data() {
        return {
            groceryList: [
                { id: 0, text: 'vegetables' },
                { id: 1, text: 'cheese' },
                { id: 2, text: 'whatever else humans are supposed to eat' }
            ],
            myObject:{
                titile: 'title',
                author: 'Jane Doe',
            }
        }
    }
}
Vue.createApp(ComponentsApp).mount('#components-app')

//テンプレート構文
//コンポーネントの登録より後ろにやったら動かなかった。
//createAppのみだと動く。
const RenderTemplate = {
    data() {
        return {
            msg: 'メッセージ',
            rawHtml: '<span style="color: red">This should be red.</span>',
            dynamicId: 'add',
            isButtonDisabled: false,
            number:1000
        }
    }
}
Vue.createApp(RenderTemplate).mount('#template-syntax')

Vue.createApp({
    data(){
        return{
            author: {
                name:'John',
                books:[
                    'vue1',
                    'vue2',
                    'vue3'
                ]
            }
        }
    },
    computed: {
        publishedBookMessage(){
            return this.author.books.length > 0 ? 'yes' : 'no'
        }
    }
}).mount('#computed-basics')

Vue.createApp({
    data(){
        return{
            message:''
        }
    }
}).mount('#v-model-basic')

Vue.createApp({
    data(){
        return{
            checked:false
        }
    }
}).mount('#v-model-checkbox')

//アプリケーションとコンポーネント
//アプリケーションインスタンスを作成
const app = Vue.createApp(ComponentsApp)
    //アプリケーション内のコンポーネントが使える色々を登録
    //同じインスタンスを返すのでチェーン可能
    .component('SearchInput', SearchInputComponent)
    .directive('focus', FocusDirective)
    .use(LocalePlugin)
//data,props,methodsなどをコンポーネントオプション
//ユーザ定義のプロパティを追加するオプション
app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{todo.text}}</li>`
})
//mountはルートコンポーネントを返す
app.mount('#components-app')

Vue.createApp({
    data() {
        return { count: 1 }
    },
    //ライフサイクルフック
    //createdフック：インスタンス作成後にコードを実行する。
    created() {
        console.log('count is:' + this.count)
    }
})

//要素が複数ある場合、どの要素がHTML側で定義したclassを受け取るか定義する。→ $attrs.class
app.component('my-component',{
    template:`
        <p :class="$attrs.class>hi!</p>
        <span>this is a child</span>
    `
})

