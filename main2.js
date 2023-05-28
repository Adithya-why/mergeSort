function mergeSort(arr){
    if(arr.length>1){
        let leftArr = arr.slice(0,parseInt(arr.length/2));
        let rightArr = arr.slice(parseInt(arr.length/2));
        //console.log(leftArr,rightArr);

        mergeSort(leftArr);
        mergeSort(rightArr);


        let i,j,k;
        i=0;
        j=0;
        k=0;
        while(i<leftArr.length && j<rightArr.length){
            if(leftArr[i]<rightArr[j]){
                arr[k]=leftArr[i];
                
                i++;
            }

            else if(rightArr[j]<=leftArr[i]){
                arr[k]=rightArr[j];
                j++;
            }
            k++;
        }


        while(i<leftArr.length){
            arr[k]=leftArr[i];
            k++;
            i++;
        }

        while(j<rightArr.length){
            arr[k] = rightArr[j];
            k++;
            j++;
        }
    }

    
}





let x = [9,6,3,1,7];
mergeSort(x);

console.log("COOOOOMPLETEDDDDDD");
console.log(x);