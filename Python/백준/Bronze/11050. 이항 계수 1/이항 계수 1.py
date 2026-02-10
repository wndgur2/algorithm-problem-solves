n, k = map(int, input().split())


def facto(n):
    if(n == 0):
        return 1
    return n*facto(n-1)


print(int(facto(n)/(facto(k)*facto(n-k))))
