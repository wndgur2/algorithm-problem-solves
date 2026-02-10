def bagNum(n):
    remain = -1
    for i in range(n//5, -1, -1):
        remain = n - 5*i
        if(remain == 0):
            return i
        else:
            if(remain%3==0):
                return i+remain//3
    return -1

print(bagNum(int(input())))