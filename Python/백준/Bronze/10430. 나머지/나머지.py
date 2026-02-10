A, B, C = list(map(int, input().split()))
#(A+B)%C, ((A%C) + (B%C))%C, (A×B)%C, ((A%C) × (B%C))%C
print((A+B)%C)
print(((A%C) + (B%C))%C)
print((A*B)%C)
print(((A%C) * (B%C))%C)