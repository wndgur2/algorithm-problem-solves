A, B, V = list(map(int, input().split()))
date = (V-B)/(A-B)
if(date%1!=0):
    date = (date+1)//1
print(int(date))
