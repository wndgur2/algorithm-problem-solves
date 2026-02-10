n = int(input())
initial = n
a, b = 0, 0
newn = -1
cyc = 0
while( newn != initial):
    a = n//10
    b = n%10
    newn = (n%10) * 10 + (a + b)%10
    n = newn
    cyc += 1
print(cyc)