// 1 ==========>.  Write a ts program to read and print elements of array.
// var a: string[] = ["ali", "malik", "rana", "tayyab", "awais"]
// for (let i = 0; i < a.length; i++) {
//     var b = a[i]
//     console.log(b);
// }
// OR
// a.forEach((element) => {
//     console.log(element);
// })
// 2 ============>.Write a ts program to print all negative elements in an array.
// var a: number[] = [1, 2, 3, -2, -1, -5, 5, 9]
// var b: number[] = a.filter((element) => element < 0)
// console.log(b);
// 3 ==========>. Write a ts program to find sum of all array elements.
// var a: number[] = [1, 2, 3, 1, 5, 9]
// var b: number = a.reduce((a, b) => a + b)
// console.log(b);
// 4 ============>.Write a ts program to find maximum and minimum element in an array.
// var a: number[] = [2, 1, 13, 4, 5, 9]
// var b: any = a.reduce((a, b) => Math.max(a, b))
// var c: any = a.reduce((a, b) => Math.min(a, b))
// console.log("max number", b);
// console.log("min number", c);
// 5 =================>.Write a ts program to find second largest element in an array.
// var a: number[] = [2, 1, 13, 4, 5, 9, 32, 45]
// var b: any = a.sort((a, b) => a - b)
// console.log("max number", b);
// var c: number = b.slice(-2, -1)
// console.log(c);
// 6 ============>.Write a ts program to count total number of even and odd elements in an array
// var a: number[] = [2, 1, 13, 4, 5, 9, 32, 45]
// var even: any = a.filter((element) => element % 2 == 0)
// console.log("total even number", even.length);
// var odd: any = a.filter((element) => element % 2 != 0)
// console.log("total odd numbers", odd.length);
// 7 ==========>. Write a ts program to count total number of negative elements in an array.
// var a: number[] = [1, 2, 3, -2, -1, -5, 5, 9]
// var b: number[] = a.filter((element) => element < 0)
// console.log("total negative numbers", b.length);
// 8 =============>. Write a ts program to copy all elements from an array to another array
// var a: number[] = [2, 1, 13, 44, 5, 9, 32, 45]
// var b: number[] = [77, 66, 55, 44, 33, 22, 11]
// console.log(a.concat(b));
// 9 ==================>.Write a ts program to insert an element in an array.
// var a: number[] = [2, 1, 13, 44, 5, 9, 32, 45]
// a.splice(3, 0, 1)
// // OR
// // a.push(5)
// // OR 
// // a.unshift(1)
// console.log(a);
// 10 ===========>.Write a ts program to delete an element from an array at specified position
// var a: number[] = [2, 1, 13, 44, 5, 9, 32, 45]
// a.splice(3, 1)
// console.log("this delete 1 element on the index 3", a);
// 11===========>. Write a ts program to count frequency of each element in an array.
// onst counts = {};
// const sampleArray = [3, 3, 2, 1,0];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(count}
// 12===============>. Write a ts program to print all unique elements in the array.
// var a:number[]=[1,2,2,3,8,2]
// var b=a.filter((x,i,a)=>a.indexOf(x)==i)
// console.log(b);


// 13=============>. Write a ts program to count total number of duplicate elements in an array.
/////////////////////////////cofusion////////////////
// var a:number[]=[1,2,2,3,8]
// var count:number=0
// for(let i=0;i<a.length;i++){
//     var c=a[i]
//         for(let j=0;j<a.length;j++){
// if(c==a[j]){
//             count+=1
// }
//         }
//     }

// console.log(count);
// const counts = {};
// const sampleArray = [3, 3, 2, 1,0];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)
// 14===============>. Write a ts program to delete all duplicate elements from an array
// var a:number[]=[1,2,2,3,8,2]
// var b=a.filter((x,i,a)=>a.indexOf(x)==i)
// console.log(b)
// 15 ============>.Write a ts program to merge two array to third array
// var a: number[] = [2, 1, 13, 44, 5, 9, 32, 45]
// var b: number[] = [77, 66, 55, 44, 33, 22, 11]
// var c: number[] = [17, 56, 45, 24, 53, 42, 31]
// var d = a.concat(b)
// console.log(d.concat(c));
// 16 ===========>.Write a ts program to find reverse of an array.
// var a: number[] = [2, 1, 13, 44, 5, 9, 32, 45]
// console.log(a.reverse());
// 17 ===============>.Write a ts program to put even and odd elements of array in two separate array
// var a: number[] = [2, 1, 13, 4, 5, 9, 32, 45]
// var even: any = a.filter((element) => element % 2 == 0)
// console.log("even elements", even);
// var odd: any = a.filter((element) => element % 2 != 0)
// console.log("odd elements", odd);
// 18 =============>. Write a ts program to search an element in an array
// var a: number[] = [2, 1, 13, 4, 5, 9, 32, 45]
// console.log(a.includes(1));
// or
// var b = a.find((element) => element == 48)
// console.log(b);
// 19 =============>. Write a ts program to sort array elements in ascending or descending order.
// var a: number[] = [2, 1, 13, 4, 5, 9, 32, 45]
// var b: number[] = a.sort((a, b) => a - b)
// var c: number[] = a.sort((a, b) => b - a)
// console.log("accending order", b);
// console.log("decending order", c);
// 20. =============> Write a ts program to sort even and odd elements of array separately
// var a: number[] = [2, 1, 13, 4, 5, 9, 32, 45]
// var b: number[] = a.sort((a, b) => a - b)
// var c: number[] = b.filter((element) => element % 2 == 0)
// var d: number[] = b.filter((element) => element % 2 != 0)
// console.log(c);
// console.log(d);
// // console.log(c.concat(d));
// 21===========>. Write a ts program to left rotate an array.
// var a:any[]=[1,2,3,4,5]
// var b=a.shift()
// a.push(b)
// console.log(a);
// 21===========>. Write a ts program to right rotate an array.
// var a:any[]=[1,2,3,4,5]
// var b=a.pop()
// a.unshift(b)
// console.log(a);