# Observer pattern (观察者模式)

#### 气象站设计方案 - 普通方案

1. 其他第三方接入气象站获取数据问题
2. 无法在运行时动态的添加第三方
3. 违反OCP原则 ==> 引出观察者模式

#### 观察者模式原理

类似订牛奶业务
1. 奶茶/气象局: Subject
2. 用户/网站: Observer

**Subject: 登记注册, 移除和通知**

1. registerObserver
2. removeObserver
3. notifyObservers

Observer 接受输入

观察者模式：对象之间多对一依赖的一种设计方案，被依赖的对象为Subject， 依赖的对象为Observer
Subject 通知 Observer 的变化

比如这里的奶站是Subject, 是 1的一方; 用户是 Observer， 是多的一方