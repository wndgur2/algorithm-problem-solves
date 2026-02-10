n = int(input())
groupN = 0
for i in range(n):
    s = input()
    alps = ''
    goingChar = ''
    group = True
    for c in s:
        if(goingChar != c):
            if(alps.count(c)>0):
                group = False
                break
            goingChar = c
            alps += c
    if(group):
        groupN += 1
print(groupN)