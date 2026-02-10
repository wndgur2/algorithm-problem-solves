def calT(x, y):
    distance = y - x
    maxV = distance**(1/2) // 1
    result = maxV*2 - 1
    remain = distance - maxV**2
    if(remain%maxV==0):
        return result + remain//maxV
    else:
        return result + remain//maxV + 1

t= int(input())
for i in range(t):
    x, y = list(map(int, input().split()))
    print(int(calT(x, y)))
