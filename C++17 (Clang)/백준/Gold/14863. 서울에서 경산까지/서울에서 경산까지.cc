/**
 * N <= 100 : 완전탐색 안됨. DP.
 * 시간과 모금.
 * 
 * DP[i][j] i: 도시, j: 남은시간.
 * 
 * 값이 이때 얻을 수 있는 모금액의 최댓값.
 * 
 * 그니까 i-1의 값들을 도는게 아니라, 한 값에 대해 파고들어가는 차이
 * 시간은 이게 더 빨라야하는거아냐?ㄴ
*/

#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int N, K, i, result=0;
vector<unordered_map<int, int>> DP;
vector<int> walking_cost;
vector<int> walking_reward;
vector<int> bicycle_cost;
vector<int> bicycle_reward;

int solve(int depth, int time_left){
    if(time_left<0) return -100000000; // 100(N) x 1000000(최대 모금액)
    if(depth == N) return 0;
    // if(DP[depth].find(time_left) != DP[depth].end()){ // 있다
    //     return DP[depth][time_left];
    // }
    if(DP[depth][time_left]){
        return DP[depth][time_left];
    }
    DP[depth][time_left] = max(
        solve(depth+1, time_left-walking_cost[depth]) + walking_reward[depth],
        solve(depth+1, time_left-bicycle_cost[depth]) + bicycle_reward[depth]
    );
    return DP[depth][time_left];
}

int main(){
    cin >> N >> K;

    DP = vector<unordered_map<int, int>> (N);
    walking_cost = vector<int> (N);
    walking_reward = vector<int> (N);
    bicycle_cost = vector<int> (N);
    bicycle_reward = vector<int> (N);

    for(i=0; i<N; ++i){
        cin >> walking_cost[i] >> walking_reward[i] >> bicycle_cost[i] >> bicycle_reward[i];
    }

    cout << solve(0, K) << endl;

    return 0;
}