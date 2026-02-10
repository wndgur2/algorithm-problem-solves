s = input()
alps = ['', 'WXYZ', 'TUV', 'PQRS', 'MNO', 'JKL', 'GHI', 'DEF', 'ABC', '']
time = 0
for c in s:
    for alpIndex in range(len(alps)):
        if(alps[alpIndex].count(c)==1):
            time += 11-alpIndex
print(time)
