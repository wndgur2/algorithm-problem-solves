inputA = 1
primeN = 0
inputA = int(input())
while (inputA!=0):
  n = [False, False] + [True]*(inputA*2-1)
  primeN = 0
  for i in range(len(n)):
    if(n[i]):
      if(i>inputA):
        primeN += 1
      for nx in range(0, len(n), i):
        n[nx] = False
  print(primeN)
  inputA = int(input())