#include<stdio.h>

void max_heapify (int Arr[ ], int i, int N);

int main(){
  unsigned int n, t, i, j, length=0;
  scanf("%d", &n);
  int arr[n+1];
  for(i=1; i<n+1; i++){
    scanf("%d", &t);
    if(t != 0){
      length++;
      arr[length] = t;
      for(j=length/2; j>0; j/=2)
        max_heapify(arr, j, length);
    } else{
      if(length==0) printf("0\n");
      else{
        printf("%d\n", arr[1]);
        arr[1] = arr[length];
        length--;
        max_heapify(arr, 1, length);
      }
    }
  }
}

void max_heapify (int Arr[ ], int i, int N){
  int left = 2*i;
  int right = 2*i +1;

  int largest, t;
  if(left<= N && Arr[left] > Arr[i] )
    largest = left;
  else
    largest = i;
  if(right <= N && Arr[right] > Arr[largest] )
    largest = right;
  if(largest != i ){
    t = Arr[i];
    Arr[i] = Arr[largest];
    Arr[largest] = t;
    max_heapify (Arr, largest,N);
  }
}