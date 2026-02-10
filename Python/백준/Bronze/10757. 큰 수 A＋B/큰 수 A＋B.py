a, b = input().split()
dif = len(a)-len(b)
if(dif>0):
    b = '0'*dif + b
elif(dif<0):
    a = '0'*(-dif) + a

if(int(a)>9):
    aFir = a[:len(a)//2]
    aSec = a[len(a)//2:]
else:
    aFir = 0
    aSec = a
    
if(int(b)>9):
    bFir = b[:len(b)//2]
    bSec = b[len(b)//2:]
else:
    bFir = 0
    bSec = b

cSec = int(aSec) + int(bSec)
cFir = (int(aFir) + int(bFir))*(10**(len(aSec)))
print(cFir + cSec)
