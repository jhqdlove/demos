/**
 * Created by hebejin on 2016/7/4.
 * 内部排序算法
 */
//插入排序
function insert_sort(_array){
    var len = _array.length;
    for(var i=1;i<len;i++){
        var temp = _array[i];
        for(var j=i-1;j>=0;j--){
            if(_array[j]<=_array[j+1]){
                _array[j+1] = temp;
                break;
            }else{
                _array[j+1] = _array[j];
            }
        }
    }
}

//希尔排序
function shell_sort_1(_array){
    var len = _array.length;
    var jump = Math.floor(len/2);

    while(jump>=1){
        for(var i = 0;i< jump;i++){
            for(var j=jump+i;j<len;j+=jump){
                var temp = _array[j];
                for(var m=j-jump;m>=i;m-=jump){
                    if(_array[m]<=_array[m+jump]){
                        _array[m+jump] = temp;
                        break;
                    }else{
                        _array[m+jump] = _array[m];
                    }
                }
            }
        }
        jump = Math.floor(jump/2);
    }
}
function shell_sort_2(_array){
    var len = _array.length;
    var jump = Math.floor(len/2);

    while(jump>=1){
        for(var i = jump;i< len;i++){
            var temp = _array[i];
            for(var j = i-jump;j>=0;j-=jump){
                if(temp<_array[j]){
                    _array[j+jump] = _array[j];
                }else{
                    _array[j+jump] = temp;
                    break;
                }
            }
        }
        jump = Math.floor(jump/2);
    }
}

function shell_sort_3(_array){
    var len = _array.length;
    for(var jump = Math.floor(len/2);jump>=1;jump = Math.floor(jump/2)){
        for(var i = jump;i< len;i++){
            for(var j = i;j>=jump&&_array[j-jump]>_array[j];j-=jump){
                var temp = _array[j-jump];
                _array[j-jump] = _array[j];
                _array[j] = temp;
            }
        }
    }
}

//选择排序
function selection_sort(_array){
    var len = _array.length;
    for(var i=0;i<len-1;i++){
        var min = _array[i];
        for(var j=i+1;j<len;j++){
            if( _array[i]>_array[j]){
                var temp = _array[i];
                _array[i] = _array[j];
                _array[j] = temp;
            }
        }
    }
}

//冒泡排序
function bubble_sort(_array) {
    var len = _array.length;
    for (var i=len;i>=0;i--) {
        for(var j=0;j<i-1;j++){
            if(_array[j]>_array[j+1]){
                var temp = _array[j+1];
                _array[j+1] = _array[j];
                _array[j] = temp;
            }
        }
    }
}

//归并排序
function merge_sort(_array){
    
}