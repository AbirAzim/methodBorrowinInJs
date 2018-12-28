var student1 = {
    name: 'bk',
    age: 23,
    job: 'designer',
    presentation: function(prospective , batch){
        if(prospective === 'good'){
            console.log(this.name+' is a good boy , he is '+this.age+' years old and is a '+this.job+' and the batch number is '+batch);
        } else if(prospective === 'bad'){
            console.log(this.name+' is a  boybad , he is '+this.age+' years old and is a '+this.job+' and the batch number is '+batch);
        } else console.log('put some valod information');
    }
}


student1.presentation('good',20);