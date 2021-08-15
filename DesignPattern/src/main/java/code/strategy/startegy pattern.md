# 策略模式 (Strategy Pattern)

### 传统方式和解决方案

1. 所有duck, 都继承了`Duck`类, `fly()`让所有子类都可以飞， 所以不正确

2. (1)带来的问题, 其实是`extend`所带来的问题, 对`super class`局部改动会影响其他部分，会有溢出效应

3. 为了解决问题，可以通过`Override` `fly()` 来解决

4. 如果我们有一个`ToyDuck`，这样这个类需要去`Override` 所有实现的方法 ==> 引出 `策略模式`

### 策略模式

1. 定义算法，分别封装，使之互相替换

2. 设计原则
    
    1. 把变化的代码从不变的代码中分离出来
    2. 针对接口编程而不是具体类 (定义策略接口)
    3. 多用组合(聚合), 减少使用继承
    
#### 注意事项和细节

1. 关键：分析变化部分和不变部分
   
2. 核心思想：多用组合(聚合), 少用继承; 用行为类组合，而不是行为继承. 更有弹性

3. "对修改关闭，对扩展开放" 原则，客户端增加行为不用修改原有代码，只要添加一种新的策略(或者行为)，避免使用过多 if else

4. 提供了可替换继承关系的办法，策略模式将算法封装在独立的Strategy类中使得你可以独立于其他Context改变它

5. 每添加一个策略就是要增加一个类，当策略过多会导致类数目庞大