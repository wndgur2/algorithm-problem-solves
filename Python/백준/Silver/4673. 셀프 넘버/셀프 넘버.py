#10000보다 작거나 같은 셀프넘버 출력
def isSelf(n):
    l = len(str(n))
    summ = 0
    for num in range(n-9*l, n):
        summ = num
        ls = len(str(num))
        if(num>0):
            for i in range(ls):
                summ += int(str(num)[i])
            if(summ == n):
                return False
    return True
for it in range(1, 10001):
    if(isSelf(it)):
        print(it)
