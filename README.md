# TODO清单

一款基于Node.js实现的简单TODO清单功能。可用于熟悉Node的文件操作。

## 1、安装方式

npm
```bash
npm install -g todo-node
```

yarn 
```bash
yarn global add todo-node
```

## 2、使用方式

### 添加新清单

```bash
todo add 清单名
```

### 清除所有清单

```bash
todo clear
```

## 3、本地调试

```bash
yarn link

todo add 测试
todo
todo clear
```

或者

```bash
node cli.js
````