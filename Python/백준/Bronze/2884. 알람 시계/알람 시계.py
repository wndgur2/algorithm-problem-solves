hour, min = list(map(int, input().split()))

if(min<45):
    if(hour==0):
        print(23, 15+min)
    else:
        print(hour-1, 15+min)
else:
    print(hour, min-45)