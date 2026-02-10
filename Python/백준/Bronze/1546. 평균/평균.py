n = int(input())
scores = list(map(int, input().split()))
con = 100/max(scores)
summ = 0
for score in scores:
    score *= con
    summ += score
print(summ/len(scores))