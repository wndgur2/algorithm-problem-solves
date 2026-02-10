N  = int(input())
numS = 0
n = list(map(int, input().split()))
for i in range(N):
    num = n[i] 
    zer = 0
    for j in range(1, num+1):
        if(num%j == 0):
            zer += 1
    if(zer == 2):
        numS += 1
print(numS)
