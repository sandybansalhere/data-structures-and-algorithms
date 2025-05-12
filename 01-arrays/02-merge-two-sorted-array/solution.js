/**
 * Merge Two Sorted Arrays
 * @param {number[]} nums1 Sorted number array
 * @param {number[]} nums2 Sorted number array
 *
 * @returns {number[]} Merge sorted array
 */
function mergeTwoSortedArrays(nums1, nums2) {
  const sortedArr = new Array(nums1.length + nums2.length);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      sortedArr[p3] = nums1[p1];
      p1++;
      p3++;
    } else {
      sortedArr[p3] = nums2[p2];
      p2++;
      p3++;
    }
  }

  while (p1 < nums1.length) {
    sortedArr[p3] = nums1[p1];
    p1++;
    p3++;
  }

  while (p2 < nums2.length) {
    sortedArr[p3] = nums2[p2];
    p2++;
    p3++;
  }

  return sortedArr;
}

const result = mergeTwoSortedArrays(
  [50, 57, 62, 68, 71, 80],
  [50, 56, 62, 72, 76]
);
console.log(result);
