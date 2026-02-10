n = int(input())
for i in range(n):
    ox = input()
    dscore = 0
    score = 0
    for t in ox:
        if(t == 'O'):
            dscore += 1
        if(t == 'X'):
            dscore = 0
        score += dscore
    print(score)