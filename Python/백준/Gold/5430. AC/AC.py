T = int(input())
for i in range(T):
    r=0
    front=0
    p = input()
    n = int(input())
    back=n
    arr = list(input()[1:-1].split(','))
    for c in p:
        if(c=='R'):
            r+=1
        elif(c=='D'):
            if(r%2==0):
                front+=1
            else:
                back-=1
    if(back<front):
        print("error")
        continue
    if(back-1>=front):
        print('[', end='')
        if(r%2==0):
            for a in arr[front:back-1]:
                print(str(a)+',', end='')
            print(str(arr[back-1])+']')
        else:
            for a in range(back-1, front, -1):
                print(str(arr[a])+',', end='')
            print(str(arr[front])+']')
    else:
        print([])
    
