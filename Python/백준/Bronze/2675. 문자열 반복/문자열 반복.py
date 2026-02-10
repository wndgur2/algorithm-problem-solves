testN = int(input())
for i in range(testN):
    re, s = input().split()
    re = int(re)
    for ch in s:
        for r in range(re):
            print(ch, end='')
    print()
