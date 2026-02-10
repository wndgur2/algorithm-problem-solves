while 1:
    d1, d2, d3 = map(int, input().split())
    if(d1==0&d2==0&d3==0):
        break
    ds = [d1, d2, d3]
    maxd = 0
    for d in ds:
        if(d>maxd):
            maxd=d
    
    squareSum = 0
    for d in ds:
        if(d!=maxd):
            squareSum += d**2
    
    if(squareSum == maxd**2):
        print('right')
    else:
        print('wrong')