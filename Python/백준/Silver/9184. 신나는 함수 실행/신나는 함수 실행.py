def w(a,b,c):
	if(a<=0 or b<=0 or c<=0):
		return 1
	elif(a>20 or b>20 or c>20):
		return w(20,20,20)
	elif(a<b and b<c):
		if not ((a,b,c-1) in results):
			results[(a,b,c-1)]= w(a,b,c-1)
		res1=results[(a,b,c-1)]
		if not ((a,b-1,c-1) in results):
			results[(a,b-1,c-1)]= w(a,b,c-1)
		res2=results[(a,b-1,c-1)]
		if not ((a,b-1,c) in results):
			results[(a,b-1,c)]= w(a,b,c-1)
		res3=results[(a,b-1,c)]
		return res1+res2-res3
	else:
		if not ((a-1,b,c) in results):
			results[(a-1,b,c)]= w(a-1,b,c)
		res1=results[(a-1,b,c)]
		if not ((a-1,b-1,c) in results):
			results[(a-1,b-1,c)]= w(a-1,b-1,c)
		res2=results[(a-1,b-1,c)]
		if not ((a-1,b,c-1) in results):
			results[(a-1,b,c-1)]= w(a-1,b,c-1)
		res3=results[(a-1,b,c-1)]
		if not ((a-1,b-1,c-1) in results):
			results[(a-1,b-1,c-1)]= w(a-1,b-1,c-1)
		res4=results[(a-1,b-1,c-1)]
		return res1+res2+res3-res4
results=dict()
a=0
b=0
c=0
while 1:
	a, b, c = list(map(int,input().split()))
	if(a==-1 and b==-1 and c==-1):
		break
	else:
		print('w('+str(a)+ ',', str(b)+',', str(c)+') =', w(a,b,c))