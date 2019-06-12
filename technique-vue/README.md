# technique-vue

> Technique for vue

### 动态修改样式

这个是我们平时开发的时候最常用到的，主要操作就是改变class，官网上也有介绍。

1、直接使用三元运算符

    :class="selected === index ? 'selected' : ''" 

2、使用对象语法

    :class="{ selected: selected === index }" 

3、使用数组语法

    :class="[selected === index ? 'selected' : '']" 

4、多个需要计算的class的情况

  显然，如果有多个需要计算的class，直接使用三元运算符就不是特别好了。使用对象语法和数组语法都是不错的选择。(下面仅仅是一个例子)

    :class="{ selected: selected === index, unselected: selected !== index }"
    :class="[selected === index ? 'selected' : '', selected !== index ?  'unselected' : '']"

5、需要计算的class和普通的class字符串混合

  这种情况下，我们有两种方案，一种是使用数组语法，把固定的class放进去，显然，多个class可以合并：

    :class="['class1 class2 class3', selected === index ? 'selected' : '']"

  或者，同时使用class和:class`(强烈推荐)`

    class="class1 class2"
    :class="selected === 1 ? 'selected' : ''"

### v-for的key

每次使用v-for的时候，编辑器都会提示我们应该添加一个独一无二的key，我们也经常使用index作为key，不过这并不是一个最好的选择。

把demo运行起来，打开控制台的调试模式，找到对应的元素，我们会发现，每次点击添加元素的时候，index作为key的例子，每个li都重新渲染了：

![https://raw.githubusercontent.com/beat-the-buzzer/pictures/master/vue/vue-01.jpg](https://raw.githubusercontent.com/beat-the-buzzer/pictures/master/vue/vue-01.jpg)

而独一无二的key的例子中，只改变了第一个li：

![https://raw.githubusercontent.com/beat-the-buzzer/pictures/master/vue/vue-02.jpg](https://raw.githubusercontent.com/beat-the-buzzer/pictures/master/vue/vue-02.jpg)

Vue中的key和React中的作用类似，都是用来计算差异的。如果key值改变，那么在渲染DOM的时候，会先销毁，再新建。如果key不变，那么只会更新文本。如果我们使用index作为key，如果在首位新增一个元素，那么列表中每一个元素的key都变了，这样的话，浏览器把每个节点都更新了，显然这是不合理的。

### 数据改变但是没有重新渲染

我们经常会遇到这样的问题：明明改变了数据，但是DOM没有更新。其实原因很简单，就是页面中使用的数据没有被监听，因此，我们虽然改变了数据，但是没有触发render方法。

在例子中，我们定义了对象obj，它有一个属性id，然后在DOM层，我们使用了obj.id和obj.text。

点击第一个按钮给obj.text赋值，我们弹出了这个值，但是这个值没有在DOM中渲染；

点击第二个按钮，改变obj.id的值，发现除了obj.id之外，之前添加的obj.text也渲染了，我猜测是Vue底层计算虚拟DOM和真实DOM的差异，渲染了obj.text；

其实很好理解，就是改变obj.id的时候触发了render，改变obj.text的时候没有触发render；

为了解决偶尔出现的DOM不刷新问题，这里有三个解决方案：

1、如果有属性在DOM上展示，一开始的时候就去定义：

    obj: {
      id: '',
      text: ''
    }

2、如果我们在对象上追加一个属性，可以去改变整个对象，而不是改变某一个值，这种做法我是模仿了react redux的写法：

    solution1() {
      this.obj = {
        ...this.obj,
        text: '测试属性'
      }
    }

3、使用Vue提供的$set方法，用了这个方法之后，就相当于在data里面定义了这个属性，从此该属性改变的时候，也会触发DOM刷新了：

    solution2() {
      this.$set(this.obj, 'text', '添加监听');
      alert('点击第一个按钮看看刷不刷新');
    }