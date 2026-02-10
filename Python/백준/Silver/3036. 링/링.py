def getCom(a, b):
    if(a>b):
        big = a
        small = b
    else:
        big = b
        small = a
    t = big%small
    while t!=0:
        big=small
        small=t
        t=big%small
    return small
n = int(input())
dias = list(map(int, input().split()))
for i in dias[1:]:
    com = getCom(dias[0], i)
    print(str(dias[0]//com)+'/'+str(i//com))