# 手把手教你如何实现 Router（JS版和Vue版）

前端路由，一句话描述，就是URL和UI之间的映射关系。

要想实现前端路由，我们需要思考两个问题：

- 如何改变URL，不让页面刷新？
- 如何检测URL发生了变化？

我们可以拿着参考答案去反向回答这两个问题，参考答案就是`Vue-Router`有`hash`和`history`两种模式。

## hash模式

hash：就是URL的#以及后面那部分内，改变hash不会引起页面刷新。
hashchange事件监听URL的变化，改变URL的方式：浏览器前进后退、a标签、window.location

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hash Router</title>
</head>
<body>
    <ul>
        <li><a href="#/home">首页</a></li>
        <li><a href="#/about">关于</a></li>
    </ul>
    <div id="routerView"></div>
    <script>
        let routerView = document.querySelector('#routerView')
        window.addEventListener('hashchange', function() {
            let hash = location.hash
            routerView.innerHTML = hash
        })
        window.addEventListener('DOMContentLoaded', function() {
            // 首次不会触发 hashchange 事件
            let hash = location.hash
            if(hash) {
                routerView.innerHTML = hash
            } else {
                location.hash = '/'
            }
        })
    </script>
</body>
</html>
```

## history模式

history： pushState和replaceState 改变URL的path部分
popstate事件：浏览器的前进后退，history.back go forward方法触发

```html                     
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>History Router</title>
</head>
<body>
    <ul>
        <li><a href="/home">首页</a></li>
        <li><a href="/about">关于</a></li>
    </ul>
    <div id="routerView"></div>
    <script>
        let routerView = document.querySelector('#routerView')
        window.addEventListener('DOMContentLoaded', onLoad)
        window.addEventListener('popstate', function() {
            routerView.innerHTML = location.pathname
        })

        function onLoad() {
            routerView.innerHTML = location.pathname
            let ul = document.querySelector('ul')
            ul.addEventListener('click', function(e) {
                e.preventDefault()
                if(e.target.tagName == 'A') {
                    let href = e.target.getAttribute('href')
                    console.log(href)
                    history.pushState(null, '', href) // 需要启动服务才能生效
                    routerView.innerHTML = location.pathname
                }
            })
        }
    </script>
</body>
</html>
```

Nginx新增配置：

```bash
location /vue-router-test {
  alias   html/vue-router-test;
  index index.html;
  try_files $uri $uri/ /vue-router-test/index.html;
}
export const appBasePath = '/vue-router-test'
```

本地调试方法：使用VSCode插件：`Live Server`去运行`hash.html`和`history.html`。
