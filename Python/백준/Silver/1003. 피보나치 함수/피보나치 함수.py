def fibo(n):
	if(n==0):
		return [1,0]
	elif(n==1):
		return [0,1]
	else:
		res1=fibo(n-1)
		res2=fibo(n-2)
		
		return [res1[0]+res2[0], res1[1]+res2[1]]


t=int(input())

for i in range(t):
    n=int(input())
    bbv0=0
    bbv1=0
    bv0=0
    bv1=0
    for j in range(n+1):
        if(j==0):	
    	    v0=1
    	    v1=0
        elif(j==1):
        	v0=0
        	v1=1
        else:
        	v0=bv0+bbv0
        	v1=bv1+bbv1
        	
        	tbv0=bbv0+bv0
        	tbv1=bbv1+bv1
        bbv0=bv0
        bbv1=bv1
        bv0=v0
        bv1=v1
 
    print(v0, v1)