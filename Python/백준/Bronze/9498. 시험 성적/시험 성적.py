# 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F
score = int(input())
if(score >= 90):
    print('A')
elif(score >= 80):
    print('B')
elif(score >= 70):
    print('C')
elif(score >= 60):
    print('D')
else:
    print('F')