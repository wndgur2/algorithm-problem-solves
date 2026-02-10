s = input()
wordN = 0
c2 = s[0]
for c in s:
    if(c == '='):
        if(c2 == 'z'):
            if(c3 == 'd'):
                wordN -= 1
    elif(c == '-'):
        pass
    elif(c == 'j'):
        if(c2 == 'l' or c2== 'n'):
            pass
        else:
            wordN += 1
    else:
        wordN += 1
    c3 = c2
    c2 = c
print(wordN)
