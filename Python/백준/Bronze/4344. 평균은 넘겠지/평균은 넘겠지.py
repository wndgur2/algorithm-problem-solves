caseN = int(input())
for i in range(caseN):
    summ = 0
    highers = 0
    scores = list(map(int, input().split()))
    for score in range(1, len(scores)):
        summ += scores[score]
    average = summ/(len(scores)-1)
    for score in range(1, len(scores)):
        if(scores[score]>average):
            highers += 1
    perc = (highers/(len(scores)-1)) * 100
    print(format(perc, '.3f'), end='')
    print('%')