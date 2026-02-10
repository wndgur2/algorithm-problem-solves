n = int(input())
numdict=dict()
#수, 자리수
def recall(num, loc):
	if(loc==0):
		return 1
	else:
		if num==0:
			small = 0
		else:
			if not (tuple([num-1,loc-1]) in numdict):
				numdict[tuple([num-1,loc-1])]=recall(num-1,loc-1)
			small = numdict[tuple([num-1,loc-1])]
		if num==9:
			big=0
		else:
			if not (tuple([num+1,loc-1]) in numdict):
				numdict[tuple([num+1,loc-1])]=recall(num+1,loc-1)
			big= numdict[tuple([num+1,loc-1])]	
		return (big+small)%1000000000
res=0
for i in range(1,10):
	res+=recall(i,n-1)
print(res%1000000000)