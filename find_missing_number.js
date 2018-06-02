    var a = [1, 2, 4, 5, 6];
    var n = a.length;
    var i;
    var x1 = a[0]; /* For xor of all the elements in array */
    var x2 = 1; /* For xor of all the elements from 1 to n+1 */
     
    for (let i = 1; i< n; i++)
        x1 = x1^a[i];
            
    for (let i = 2; i <= n+1; i++)
        x2 = x2^i;         
    
    console.log(x1^x2);
