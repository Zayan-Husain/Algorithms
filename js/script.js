
$(document).ready(function () {
  var a = [65, 67, 74, 35, 753, 63, 69, 30];
  var sa = new sort_anim("bubble Sort", a, ".sorter");
  sa.gen();
  /*
  sa.move_up(0,()=>{
    sa.move_down(0,()=>{
        sa.move_to(0,1);
    }) 
  });
  */
  // bubbleSort(a, 0, sa);
  a = [65, 67, 74, 35, 753, 63, 69, 30];
  sa = new sort_anim("Insertion Sort", a, ".sorter");
  // insertionSort(a, 0, sa);
  a = [65, 67, 74, 35, 753, 63, 69, 30];
  sa = new sort_anim("Selection Sort", a, ".sorter");
  //selectionSort(a, 0, sa);
  a = [4, 5, 1, 208, 724, 525, 678, 470];
  console.log("Before merge sort: " + a)
  a = mergeSort(a);
  console.log("After merge sort: " + a)
  // console.log(binarySearch(a, 99))
});


async function bubbleSort(arr, i, sa) {
  if (i >= arr.length - 1) { sa.gen(); return };
  var temp;
  for (let j = 0; j <= arr.length - 1; j++) {
    //green animation
    sa.gen();
    sa.ychange(j, j + 1, "green")
    await sleep(100);

    temp = arr[j];
    if (arr[j] > arr[j + 1]) {
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      //red animation
      await sleep(500);
      sa.gen();
      sa.ychange(j, j + 1, "red")
      await sleep(1000);
      sa.gen();
    }


  }
  i++;
  bubbleSort(arr, i, sa);
}
async function insertionSort(arr, i, sa) {
  if (i > arr.length - 1) return;
  var current = arr[i];
  var j = i;
  while (j > 0 && arr[j - 1] > current) {
    //green animation
    sa.gen();
    sa.ychange(j, j + 1, "green")
    await sleep(500);
    arr[j] = arr[j - 1];
    j--;
  }
  arr[j] = current;
  //red animation
  await sleep(500);
  sa.gen();
  sa.ychange(j, j, "red")
  await sleep(1000);
  sa.gen();
  insertionSort(arr, i + 1, sa);
}
async function swap(arr, i, j, sa) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp;
}
async function selectionSort(arr, i, sa) {
  if (i > arr.length - 1) return;
  var min = i;
  await sleep(1000);
  sa.gen();
  sa.ychange(i, i, "green");
  for (var j = i; j <= arr.length; j++) {
    //green animation
    sa.ychange(j, j, "green")
    await sleep(1000);
    if (arr[j] < arr[min]) {
      min = j;
    }
  } //end loop
  sa.gen();
  sa.ychange(min, i, "red");
  swap(arr, min, i, sa);
  await sleep(1000);
  selectionSort(arr, i + 1, sa);
} //end selection sort
function binarySearch(arr, sq) {
  var low = 0;
  var high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2)
    if (arr[mid] === sq) return mid;
    else if (arr[mid] < sq) low = mid + 1
    else high = mid - 1;
  }
  return -1;
}
function mergeSort(arr, sa) {
  if (arr.length <= 1) return arr;
  var m = Math.floor(arr.length / 2);
  var l = arr.slice(0, m);
  var r = arr.slice(m);
  return merge(mergeSort(l, sa), mergeSort(r, sa), sa);
}
function merge(l, r, sa) {
  var result = [];
  var li = 0, ri = 0;
  while (li < l.length && ri < r.length) {
    if (l[li] < r[ri]) {
      result.push(l[li]);
      li++;
    } else {
      result.push(r[ri]);
      ri++;
    }
  } //////// end while
  return result.concat(l.slice(li)).concat(r.slice(ri));
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}