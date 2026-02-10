inputs = []
for i in range(10):
    inputs.append(int(input()))
uniqRemain = []
for inp in inputs:
    if(uniqRemain.count(inp%42)==0):
        uniqRemain.append(inp%42)
print(len(uniqRemain))