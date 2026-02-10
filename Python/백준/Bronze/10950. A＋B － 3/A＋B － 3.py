n = int(input())
summary = []
for i in range(n):
    a, b = list(map(int, input().split()))
    summary.append(a+b)
for ab in summary:
    print(ab)