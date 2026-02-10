/*
    dfs
     - 갈 수 있는 곳이 없으면 폐기
     - 최단 거리가 아니면 폐기
     - 최소 거울 수가 아니면 폐기
     - 목표 지점에 도달하면 저장
    
    경로가 지녀야 할 속성
     - 현재 이동중인 방향(이전 칸에서)
     - 지금까지 사용한 거울의 갯수
     - 이동 거리

    좌표는 모두 y, x 순으로 표기
*/

#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

vector<vector<int> > d_loc {{-1, 0}, {0, 1}, {1, 0}, {0, -1}}; // dy, dx
vector< vector<char> > map_;
vector<vector<int> > map_mirror;

int w, h, i, j, cnt;

vector<int> move(int direction, vector<int> loc){ // loc을 direction으로 1칸 이동
    vector<int> new_loc = loc;

    new_loc[0] += d_loc[direction][0];
    new_loc[1] += d_loc[direction][1];

    return new_loc;
}

bool check_no_wall(vector<int> loc){ // loc에서 direction 방향에 벽이 있는지
    if((loc[0] < 0) || (loc[1] < 0)) return false; // 음수
    if((loc[0] >= h) || (loc[1] >= w)) return false; // 크기 초과
    if(map_[loc[0]][loc[1]] == '*') return false; // 벽

    return true;
}

void dfs(int direction, vector<int> loc){
    // print map_
    // cnt ++;
    // cout << cnt << endl;

    // for(j=0; j<h; j++){
    //     for(int k=0; k<w; k++){
    //         if(j==loc[0] && k == loc[1])
    //             cout << '@';
    //         else cout << map_mirror[j][k];
    //     }
    //     cout << endl;
    // }
    // cout << endl;
    // for(j=0; j<10000000; j+=2){
    //     j --;
    // }

    vector<int> new_loc;
    int new_direction, tmp;
    
    for(int d=0; d<4; d++){
        new_direction = (direction+d) % 4;
        new_loc = move(new_direction, loc);
        if(d==0) tmp = 0;
        else tmp = 1;
        if(check_no_wall(new_loc)){
            if(map_mirror[loc[0]][loc[1]] + 1 <= map_mirror[new_loc[0]][new_loc[1]]){
                map_mirror[new_loc[0]][new_loc[1]] = map_mirror[loc[0]][loc[1]] + tmp;
                dfs(new_direction, new_loc);
            }
        }
    }
}

int main(){
    // make the frame of map_ (2d vector)
    cin >> w >> h;

    for(i=0; i<h; i++){
        vector<char> tmp;
        vector<int> tmp_;
        map_.push_back(tmp);
        map_mirror.push_back(tmp_);
        for(j=0; j<w; j++){
            map_[i].push_back(' ');
            map_mirror[i].push_back(h*w);
        }
    }

    // map_ input, set starting point
    int start_x, start_y, end_x, end_y;
    bool start_end = false;

    for(i=0; i<h; i++)
        for(j=0; j<w; j++){
            cin >> map_[i][j];

            if(map_[i][j] == 'C'){ // 처음 등장하는 C가 출발점이 됨
                if(start_end){
                    end_y = i;
                    end_x = j;
                } else{
                    start_y = i;
                    start_x = j;
                    start_end = true;
                }
            }
        }

    map_[start_y][start_x] = '.'; // 출발점 C 제거
    map_mirror[start_y][start_x] = 0;

    // print map_
    // for(i=0; i<h; i++){
    //     cout << endl;
    //     for(j=0; j<w; j++)
    //         cout << map_mirror[i][j];
    // }

    // depth first search
    for(i=0; i<4; i++) // 4방향
        dfs(i, {start_y, start_x});

    cout << map_mirror[end_y][end_x] << endl;

    return 0;
}