a, b = input().split()
newab = []
for s in [a, b]:
    news = ''
    for c in range(len(s)-1, -1, -1):
        news += s[c]
    newab.append(int(news))
print(max(newab))