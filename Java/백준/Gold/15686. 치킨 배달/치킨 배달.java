import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {

	/**
	 * 
5 3
0 0 1 0 0
0 0 2 0 1
0 1 2 0 0
0 0 1 0 0
0 0 0 0 2
	 * @param args
	 */
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static StringTokenizer st;
	static int N, M;
	static int[][] houses;
	static int houseN=0;
	
	static int[][] chickens;
	static int chickenN=0;
	
	static boolean[] aliveChicks = new boolean[249];
	static ArrayList<Integer> chicks = new ArrayList<>();
	
	static int result=999999;
	
	public static void main(String[] args) throws IOException{
		st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		houses = new int[2*N][2];
		chickens = new int[249][2];
		
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				char temp = st.nextToken().charAt(0);
				if(temp == '1') {
					houses[houseN][0] = i;
					houses[houseN++][1] = j;
				}else if(temp == '2') {
					chickens[chickenN][0] = i;
					chickens[chickenN++][1] = j;
				}
			}
		}
//		System.out.println(chickenN);
//		for(int[] chicken: chickens) {
//			System.out.println("CHICK " + chicken[0] + " " + chicken[1]);
//		}
//		for(int[] house: houses) {
//			System.out.println("HOUSE " + house[0] + " " + house[1]);
//		}
		
		combination(0, 0);
		System.out.println(result);
	}
	
	public static void combination(int depth, int start) {
		if(depth == M) { // M개를 뽑음 !
			int tempRes = minChickenDistance();
			if(tempRes < result) {
				result = tempRes;
//				System.out.println(chicks);
			}
			return;
		}
		
		for (int i = start; i < chickenN; i++) {
			aliveChicks[i] = true;
			chicks.add(i);
			combination(depth+1, i+1);
			aliveChicks[i] = false;
			chicks.remove(depth);
		}
	}
	
	public static int minChickenDistance() {
//		System.out.println("==========");
//		System.out.println("chicks:: " + chicks);
		int res = 0;
		//각 집에 대해서
		for (int i = 0; i < houseN; i++) {
//			System.out.println("HOUSE : " + i);
			// 치킨집과의 최소거리
			int minDist = 9999;
			
//			System.out.println("HOUSE FROM : " + houses[i][0] + ", " + houses[i][1]);
			for (int j = 0; j < M; j++) {
				int tempDist = getDistance(houses[i][0], houses[i][1], chickens[chicks.get(j)][0], chickens[chicks.get(j)][1]);
				if(tempDist < minDist) minDist = tempDist;
			}
			res+=minDist;
//			System.out.println("MINTEMP : " + minDist);
		}
//		System.out.println("minCHICK RES: " + res);
		return res;
	}
	
	public static int getDistance(int y1, int x1, int y2, int x2) {
		int res = (Math.abs(y1 - y2) + Math.abs(x1 - x2));
//		System.out.println("GETDIST: " + res);
		return res;
	}
}
