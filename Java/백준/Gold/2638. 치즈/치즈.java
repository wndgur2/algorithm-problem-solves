import java.io.*;
import java.util.*;

public class Main{
    static int H, W;
    static int[][] map;
    static int[][] air;
    static int cheese;
    static ArrayDeque<int[]> toMelt;
    static int[][] dirs = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        H = Integer.parseInt(st.nextToken());
        W = Integer.parseInt(st.nextToken());
        map = new int[H][W];
        air = new int[H][W];
        cheese = 0;

        toMelt = new ArrayDeque<>();
        ArrayDeque<int[]> temp = new ArrayDeque<>();

        int ny, nx;
        for(int i=0; i<H; i++){
            st = new StringTokenizer(br.readLine());
            for(int j=0; j<W; j++){
                map[i][j] = Integer.parseInt(st.nextToken());
                if(map[i][j]==1) cheese ++;
            }
        }

        map[0][0] = 2;
        floodFill(0, 0, toMelt);

        int res = 0;
        while(cheese>0){
            ++res;
            cheese -= toMelt.size();

            temp = new ArrayDeque<>();
            while(!toMelt.isEmpty()){
                int[] yx = toMelt.poll();
                if(map[yx[0]][yx[1]] != 1) continue;
                map[yx[0]][yx[1]] = 2;
                floodFill(yx[0], yx[1], temp); // temp에 다음 녹을 치즈를 넣음
            }
            toMelt = temp;
        }

        System.out.println(res);
    }

    static public void floodFill(int y, int x, ArrayDeque<int[]> temp){
        int ny, nx;
        for(int[] dir: dirs){
            ny = y+dir[0];
            nx = x+dir[1];
            if(ny<0||nx<0||ny>=H||nx>=W) continue;
            if(map[ny][nx]==1){
                if(++air[ny][nx]==2)
                    temp.add(new int[]{ny, nx});
            } else if(map[ny][nx] == 0){
                map[ny][nx] = 2;
                floodFill(ny, nx, temp);
            }
        }
    }

}