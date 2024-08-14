function duplicates(nums) {
    const countMap = new Map();
    
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    let duplicateList = [];
    for (const [num, count] of countMap.entries()) {
        if (count > 1) {
            duplicateList.push(num);
        }
    }

    console.log(duplicateList);
}

nums = [1,2,3,4,4,5,5];
duplicates(nums);