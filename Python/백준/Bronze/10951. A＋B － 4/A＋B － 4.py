import sys
while(1):
    inputs = sys.stdin.readline()
    if(len(inputs) < 1):
        break
    else:
        a, b = list(map(int, inputs.split()))
        print(a+b)