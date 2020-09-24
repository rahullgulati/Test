function findMaxConsecutiveOnes(nums) {
    var maxCount = 0;
    
    var count = 0;
    for (var i in nums) {
        count = nums[i] === 1 ? count + 1 : 0;
        if (count > maxCount) {
            maxCount = count;
        }
    }
    
    console.log(maxCount);
};

findMaxConsecutiveOnes([1,1,0,1,0,1,1,1,1,1,0])
