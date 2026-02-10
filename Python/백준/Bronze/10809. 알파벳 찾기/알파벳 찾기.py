alp = [-1]*26
s = input()
for n in range(len(s)-1, -1, -1):
    alp[ord(s[n])-97] = n
for i in alp:
    print(i, end=' ')
