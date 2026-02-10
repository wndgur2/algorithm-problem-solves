n = int(input())
div6 = (n+4)//6
layer = 1
t = 1
while(div6>0):
    layer += 1
    div6 -= t
    t += 1
print(layer)