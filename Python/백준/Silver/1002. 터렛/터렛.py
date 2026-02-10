T = int(input())
for case in range(T):
    x1, y1, r1, x2, y2, r2 = map(int, input().split())
    d = (x2-x1)**2 + (y2-y1)**2
    if(d == 0 and r1==r2):
        print(-1)
    elif(d==(r1+r2)**2 or (r2-r1)**2==d):
        print(1)
    elif((r2-r1)**2>d or d>(r1+r2)**2):
        print(0)
    elif(d < (r1+r2)**2):
        print(2)