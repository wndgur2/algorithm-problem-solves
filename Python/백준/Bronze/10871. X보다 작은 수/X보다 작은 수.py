n, max = list(map(int, input().split()))
arr = list(map(int, input().split()))
for a in arr:
    if(a<max):
        print(a, end=' ')