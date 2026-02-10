a = int(input())
b = int(input())
c = int(input())
mul = a* b* c
ar = str(mul)
amount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
for n in ar:
    amount[int(n)]+=1
for n in amount:
    print(n)