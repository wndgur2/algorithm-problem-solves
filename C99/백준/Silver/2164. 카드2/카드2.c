#include <stdio.h>
int main()
{
    int n;
    scanf("%d",&n);
    int deck[1000005];
    int front=0,tail=0;
    for(int i=1;i<=n;i++){
        deck[front]=i;
        front++;
    }
    while(front-tail!=1){
        tail++;
        int tmp=deck[tail];
        tail++;
        deck[front]=tmp;
        front++;
    }
    printf("%d",deck[tail]);
}