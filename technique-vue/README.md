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

  或者，同时使用class和:class(强烈推荐)

    class="class1 class2"
    :class="selected === 1 ? 'selected' : ''"

### v-for的key

每次使用v-for的时候，编辑器都会提示我们应该添加一个独一无二的key，我们也经常使用index作为key，不过这并不是一个最好的选择。

