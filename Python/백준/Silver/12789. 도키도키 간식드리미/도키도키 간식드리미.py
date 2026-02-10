def solution():
    N = int(input())
    S = list(map(int, input().split()))
    res = []
    stack = []
    while(S):
        i = S[0]
        # print(i, res, stack)
        if(i == len(res)+1):
            res.append(i)
            S.pop(0)
        else:
            if(stack and stack[-1] == len(res)+1):
                res.append(stack.pop(-1))
            else:
                stack.append(i)
                S.pop(0)
    while(stack):
        # print(res, stack)
        if(stack[-1] == len(res)+1):
            res.append(stack.pop(-1))
        else:
            print("Sad")
            return
    print("Nice")

solution()