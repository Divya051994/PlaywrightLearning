/**
 * -----------------------------------------
 * Author      : Divya
 * Program     : Union of Two Arrays
 * Description : Combines two arrays and prints unique elements only,
 *               removing any duplicate values from the result
 * Date        : 28-Jun-2026
 * -----------------------------------------
 */

/**
 * Finds and returns the union of two arrays without duplicates.
 *
 * @param {number[]} array1 - The first input array of numbers
 * @param {number[]} array2 - The second input array of numbers
 * @returns {number[]}        A new array containing all unique elements
 *                            from both arrays combined
 * @author Divya
 */
function intersectionArray()
{
    let array1 = [ 4, 1, 7, 3, 9, 10 ];
    let array2 = [8,2,3,6,78,9];
    let union = [];
    //create new Union array and push all the elements from array1
    for (let i = 0; i < array1.length; i++) {
    union.push(array1[i]);
    }
   // Add from array2 only if not found in union
    for (let i = 0; i < array2.length; i++) {
    let found = true;
    for (let j = 0; j < union.length; j++) {
      if (array2[i] === union[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      union.push(array2[i]);
    }
  }
  console.log("The Union of both array without duplicate is "+union)

}
intersectionArray();