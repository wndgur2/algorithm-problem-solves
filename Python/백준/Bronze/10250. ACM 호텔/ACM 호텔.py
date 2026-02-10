def roomNum(h, w, n):
    y = str(n%h)
    x = str(n//h+1)
    if(y == '0'):
        y = str(h)
        x = str(int(x)-1)
    if(int(x)<10):
        x = str(0) + str(x)
    return y+x

t = int(input())
for i in range(t):
    h, w, n = list(map(int, input().split()))
    print(roomNum(h, w, n))
