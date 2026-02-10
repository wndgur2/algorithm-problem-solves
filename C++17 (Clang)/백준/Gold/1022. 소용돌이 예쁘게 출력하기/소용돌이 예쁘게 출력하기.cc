#include <iostream>
#include <vector>
#include <stdlib.h>
#include <algorithm>
using namespace std;


int getMidValue(int direction, int distance){
    vector<int> initialDeltas = {3, 7, 5, 1}; // 상하좌우
    int delta = initialDeltas[direction];
    int result = 1;
    while(distance--){
        result += delta;
        delta += 8;
    }
    return result;
}


int getValue(int y, int x){
    if(abs(y) >= abs(x)){
        if(y < 0){ // 상
            return getMidValue(0, abs(y)) - x;
        } else{ // 하
            return getMidValue(1, y) + x;
        }
    } else{
        if(x < 0){ // 좌
            return getMidValue(2, abs(x)) + y;
        } else{ // 우
            return getMidValue(3, x) - y;
        }
    }
    return 0;
}

int main(){
    int y1, x1, y2, x2, y, x, i, val;
    cin >> y1 >> x1 >> y2 >> x2;

    // int start_value = getValue(y1, x1);
    int maxLength = 
        to_string(
            max({getValue(y1, x1), getValue(y1, x2), getValue(y2, x1), getValue(y2, x2)})
        ).size();
        
    for(y=y1; y<=y2; ++y){
        for(x=x1; x<=x2; ++x){
            // if(abs(x) > abs(y)){ // 달팽이 밖
            //     if(x > 0){ // delta씩 증가

            //     } else{ // delta씩 감소

            //     }
            // } else{ // 달팽이 안
            //     if(y>0){ // 1씩 증가

            //     } else{ // 1씩 감소

            //     }
            // }
            int val = getValue(y, x);
            for(i=0; i<maxLength-to_string(val).size(); ++i){
                cout << ' ';
            }
            cout << val << ' ';
        }
        cout << endl;
    }

    //for test
    // int y1, x1;
    // cin >> y1 >> x1;
    // cout << getValue(y1, x1);
    return 0;
}