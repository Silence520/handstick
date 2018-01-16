
	class Praisebutton{
		constructor(num){
			this.num=num
		}
		add(){
			return this.num+1;
		}
	}
	class Thumb extends  Praisebutton{
		constructor(num) {
			super(num)
		  }
		  dianzan(){
		  	let newnum=this.add()
		  	console.log('小手点赞'+newnum )
		  	return newnum;
		  }
	}
module.exports =addzan= num => new Thumb(num).dianzan();
 




