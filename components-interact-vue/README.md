### 组件间传值

组件间传值是我们在开发中常见的情况，下面就简单总结一下组件间传值的方式

1、父传子——props

这种方式和`React`的写法很像，在例子中，我们把`pages/Father2child/Father2child.vue`看做父组件，同一目录下的`Child.vue`看做子组件。

我们先定义一个输入框和一个按钮，点击按钮的时候，执行`passData`函数:

```html
<input type="text" v-model="inputValue" placeholder="请输入要传给子组件的值" />
<button type="button" @click="passData">把输入框的值传给子组件</button>
```

`passData`函数把输入框的内容去空格后，赋值给`showText`:

```js
// 改变showText的值
passData () {
  var inputValue = this.inputValue.trim();
  if(inputValue) {
    this.showText = inputValue;
  } else {
    alert('请输入要传的值');
  }
)   
```

`showText`是子组件的一个属性，属性的语法就和HTML一样：

```html
<Child :showText="showText" ref="myChild" />
```

然后子组件里面把`showText`展示在页面上，注意使用props引入属性：

```html
<h4>通过props传过来的值是：{{ showText }}</h4>  
```

这样，我们点击按钮的时候，就会把输入框里面的值传给子组件了。

2、父传子——执行子组件的方法

我们可以在父组件的代码里调用子组件的方法，调用的时候，入参就是传值。

首先，点击按钮的时候，执行`triggerChild`方法，注意Child子组件有一个ref属性，这个属性很关键，属性值可以取到子组件的引用：

```html
<button type="button" @click="triggerChild">触发子组件的函数</button>
<Child :showText="showText" ref="myChild" />
```

然后我们通过`this.$refs.myChild`获取到子组件的引用，然后执行子组件的changeColor方法，并且把字符串‘father2child’传过去：

```js
triggerChild () {
  var myChild = this.$refs.myChild;
  myChild.changeColor('father2child.');
}
```

子组件执行函数，接收参数，并且展示在页面上，顺便修改了字体颜色：

```html
<h4 :class="isRed ? 'red' : ''">通过调用子组件函数传过来的值是：{{ anotherMsg }}</h4>
```

```js
changeColor(text) {
  this.isRed = !this.isRed;
  this.anotherMsg = text;
}
```

3、子传父——$emit
