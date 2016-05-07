/**
 * Created by jh on 2015/10/31.
 */

var pic12306 = function() {
	this.alive = [];
	this.all=[["安南","annan",2],["奥巴马","aobama",4],["阿尔扎","azhaer",2],["白", "bai",3],
	          ["草泥马","caonima",2],["陈冠希","chenguanxi", 1],["陈赫","chenhe", 5],["尔康","erkang",4],
	          ["exo", "exo",6],["范伟","fanwei", 3],["好男人","haonanren",1],["姐姐","jiejie",6],
	          ["刘翔","liuxiang", 4 ],[ "马","ma",3],[ "美", "mei", 3],["诺维茨基","nuoweiciji", 4],
	          [ "热狗","regou",3],["人形狗","renxinggou",4],["如花","ruhua", 3],["三胖","sanpang",3],
	          ["少女时代","snsd", 7],["王大陆","wangdalu",7],["汪峰","wangfeng",2],["王尼玛","wangnima",6],
	          ["王祖蓝","wangzulan", 2],["相声演员","xiangshengyanyuan",2],["杨臣刚","yangchengang",3],["姚明","yaoming",4],
	          ["张翰","zhanghan",5],["真货","zhenhuo",1] ,["周杰伦","zhoujielun",6] , ["周星驰","zhouxingchi",2]
	          ];
}

pic12306.prototype.number = 32;

pic12306.prototype.init = function() {
	for (var i = 0; i < this.number; i++) {
		this.alive[i] = i;
	}
}
