function isSame(arr1, arr2) {
    // ✅ Check if both inputs are arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }

    // ✅ Check if lengths are equal
    if (arr1.length !== arr2.length) {
        return false;
    }

    // ✅ Compare each element
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    // ✅ If all checks pass → arrays are same
    return true;
}
console.log(isSame([1, 2, 3], [1, 2, 3])); 