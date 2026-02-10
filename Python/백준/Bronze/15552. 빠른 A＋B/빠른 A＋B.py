import sys
n = -1
for line in sys.stdin:
    arr = line.rstrip().split()
    if(len(arr)>1):
        a, b = list(map(int, arr))
        print(a + b)
        n -= 1
        if(n == 0):
            break
    else:
        n = int(line.rstrip())