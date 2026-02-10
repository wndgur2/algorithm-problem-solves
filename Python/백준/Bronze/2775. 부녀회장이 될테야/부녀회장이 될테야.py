def summ(arr):
    res = 0
    for i in arr:
        res += i
    return res

def pN(k, n):
    firstFloor = []
    for t in range(n):
        firstFloor.append(t+1)
    downFloor = firstFloor
    for t in range(1, k+1):
        nowFloor = []
        for df in range(len(downFloor)):
            dt = summ(downFloor[0:df+1])
            nowFloor.append(dt)
        downFloor = nowFloor
    return nowFloor[n-1]

T = int(input())
for test in range(T):
    k = int(input())
    n = int(input())
    print(pN(k, n))
