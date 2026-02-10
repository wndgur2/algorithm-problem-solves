a = int(input())
b = int(input())
b1 = b%10
b3 = b//100
b2 = (b - b3*100 - b1)//10
print(b1*a)
print(b2*a)
print(b3*a)
print(b*a)