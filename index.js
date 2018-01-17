
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
		  	if(typeof(this.num)=='number'){
		  		let num=this.add()
		  		console.log('小手点赞'+num )
		  		return num;
		  	}else{
		  		return 0;
		  	}
		  	
		  }
	}
let addLikes=num => new Thumb(num).dianzan();
module.exports =addLikes;
 




