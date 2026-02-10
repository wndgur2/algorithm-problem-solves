def solution(n, times):
    times.sort()
    right = times[0] * n
    left = times[0]
    while left < right:
        mid = (right + left) // 2
        sumP = 0
        for t in times:
            sumP += mid//t # t라는 심사대에서 넘기는 사람 수
        if sumP < n:
            left = mid+1
        else:
            result = mid
            right = mid
    return result