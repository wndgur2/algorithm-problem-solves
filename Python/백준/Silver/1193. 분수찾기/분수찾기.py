def findLayer(n):
    i = 1
    while (n>0):
        n -= i
        i += 1
    return i-1, n
layer, i = findLayer(int(input()))
i = layer + i
if(layer%2!=0):
    print(str(layer+1-i)+'/'+str(i))
else:
    print(str(i)+'/'+str(layer+1-i))