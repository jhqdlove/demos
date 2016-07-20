/**
 * Created by hebejin on 2016/7/13.
 * how to  get the type of var
 * 数据类型:字符串、数字、布尔、数组、Null、Undefined;对象
 */

var num = 1,bool = true, str = "word" ,arr = new Array(),obj = new Object(),day = new Date(),fun = function(){};
function ff(){};

/**
 * Object.prototype.toString.call()
 * 只可以解析出语发规范里面要求的类型，自定义的无法查找
 */
Object.prototype.toString.call(str);//”[object String]”
Object.prototype.toString.call(num);//”[object Number]”
Object.prototype.toString.call(bool);//”[object Boolean]”
Object.prototype.toString.call(arr);//”[object Array]”
Object.prototype.toString.call(obj);//”[object Object]”
Object.prototype.toString.call(day);//”[object Date]”
Object.prototype.toString.call(null);//”[object Null]”
Object.prototype.toString.call(undefined);//”[object Undefined]”
Object.prototype.toString.call(fun);//”[object Function]”
Object.prototype.toString.call(ff);//”[object Function]”
Object.prototype.toString.call(JSON)//[object JSON]

/**
 * typeof
 * 检测给定变量的数据类型，可能的返回值：
 * 'boolean'    --- 这个值是布尔值；
 * 'string'        --- 这个值是字符串；
 * 'number'     --- 这个值是数值；
 * 'object'       --- 这个值是对象或null；
 * 'function'    --- 这个值是函数。
 *  'undefined' --- 这个值未定义；
 */
typeof num;//number
typeof bool;//boollean
typeof str;//string
typeof arr;//object
typeof obj;//object
typeof day;//object
typeof null;//object
typeof undefined;//undefined
typeof fun;//function
typeof ff;//function

/**
 * constructor
 * 可以类似于java中，类名和实例的关系
 * 根节点是Function
 */
Number.constructor;//[Function: Function]
Function.constructor;//[Function: Function]
Object.constructor;//[Function: Function]
num.constructor;//[Function: Number]
bool.constructor;//[Function: String]
str.constructor;//[Function: String]
arr.constructor;//[Function: Array]
obj.constructor;//[Function: Object]
day.constructor;//[Function: Date]
fun.constructor;//[Function: Function]
ff.constructor;//[Function: Function]


/**
 * instanceof
 * 可以判断出一个自定义类型
 * 根节点是Object
 */
function User(name){
    this.name = name;
}
var u = new User("hello");
u instanceof User;//true
u instanceof Object;//true
u instanceof Function;//false
User instanceof Function;//true
User instanceof Object;//true

// Gets the `[[Prototype]]` of `value`.
function getPrototype(value) {
    return Object.getPrototypeOf(Object(value));
}
getPrototype({});
getPrototype(new Object());
Object.prototype.__proto__ == null;

