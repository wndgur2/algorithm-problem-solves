#include<stdio.h>
#include<stdlib.h>

void mupltiply(int *ar1, int *ar2, int n);
int* square(int *ar1, int n, long long r);

int main(){
  int n;
  long long b;
  scanf("%d %lld", &n, &b);
  int *arr = malloc(sizeof(int)*n*n);

  for(int i=0; i<n*n; i++){
    scanf("%d", &arr[i]);
    arr[i]%=1000;
  }

  int *res = square(arr, n, b);

  for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
      printf("%d ", res[i*n + j]);
    }
    printf("\n");
  }
  free(arr);
  free(res);
}

void mupltiply(int *ar1, int *ar2, int n){
  int *result = malloc(sizeof(int)*n*n);
  int i, j, k;

  for(i=0; i<n*n; i++){
    result[i] = 0;
  }

  for(i=0; i < n; i++){
    for(j=0; j < n; j++){
      for(k=0; k < n; k++){
        result[i*n+j] += ar1[n*i+k] * ar2[j+k*n];
      }
      result[i*n+j] %= 1000;
    }
  }

  for(i=0; i<n*n; i++){
    ar1[i] = result[i];
  }
  free(result);
}

int* square(int *ar1, int n, long long r){
  int *result;
  if(r==1){
    int *newAr = malloc(sizeof(int)*n*n);
    for(int i=0; i<n*n; i++){
      newAr[i] = ar1[i];
    }
    return newAr;
  }
  result = square(ar1, n, r/2);
  mupltiply(result, result, n);
  if(r%2){
    mupltiply(result, ar1, n);
  }
  return result;
}