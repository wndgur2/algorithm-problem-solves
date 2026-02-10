a, b = -1, -1
while (a != 0 or b != 0):
    a, b = list(map(int, input().split()))
    if(a != 0 or b != 0):
        print(a + b)