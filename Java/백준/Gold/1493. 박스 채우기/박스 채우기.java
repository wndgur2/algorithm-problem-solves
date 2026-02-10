import java.io.*;
import java.util.*;

class Main{
  static long res = 0, N;
  static long[] usedCubes = new long[20];
  static int[] cubes = new int[20];
  public static void main(String[] args) throws IOException{
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine());

    int l, w, h;
    l = Integer.parseInt(st.nextToken());
    w = Integer.parseInt(st.nextToken());
    h = Integer.parseInt(st.nextToken());
    N = Integer.parseInt(br.readLine());

    int size, amount;


    for(int i=0; i<N; i++){
      st = new StringTokenizer(br.readLine());
      size = Integer.parseInt(st.nextToken());
      amount = Integer.parseInt(st.nextToken());

      if(amount==0) continue;

      cubes[size] = amount;
    }

    fill(l, w, h);
    useCubes();
    System.out.println(res);
  }

  static void useCubes(){
    for(int i=19; i>=0; i--){
      if(usedCubes[i]>cubes[i]){
        if(i==0) {res = -1; return;}
        usedCubes[i-1] += (usedCubes[i]-cubes[i])*8; // 더 작은 큐브로 채워보기
        usedCubes[i] = cubes[i];
      }
      res += usedCubes[i];
    }
  }

  static void fill(int l, int w, int h){
    if(l==0 || w==0 || h==0) return;

    int minL = (int) Math.min(l, Math.min(w, h));
    int i = log2(minL);
    int size = (int)Math.pow(2, i);

    int[] counts = new int[3];
    counts[0] = l/size;
    counts[1] = w/size;
    counts[2] = h/size;
    
    // size로 최대한 채우기
    usedCubes[i] += (long)counts[0]*(long)counts[1]*(long)counts[2];

    // 남은 공간에 대해서 dfs
    // 3개의 육면체에 대한 fill 호출
    if(w-size>0)
      fill(l, w-(size*counts[1]), h);
    if(h-size>0)
      fill(l, size*counts[1], h-(size*counts[2]));
    if(l-size>0)
      fill(l-(size*counts[0]), size*counts[1], size*counts[2]);
  }

  static int log2(int n){
    return (int)(Math.log(n)/Math.log(2));
  }
}