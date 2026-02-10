import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

/*

7 8
0 0 0 0 0 0 1 1
1 1 0 0 0 0 1 1
1 1 0 0 0 0 0 0
1 1 0 0 0 1 1 0
0 0 0 0 0 1 1 0
0 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1

 */
public class Main {
	static int H, W, res;
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static int[][] map, edges;
	static boolean[] visited;
	static int n;
	
	static class Edge implements Comparable<Edge>{
		int cost, to;

		public Edge(int to, int cost) {
			super();
			this.to = to;
			this.cost = cost;
		}
		
		@Override
		public int compareTo(Edge o) {
			return Integer.compare(cost, o.cost);
		}
		
	}
	
	public static void main(String[] args) throws IOException{
		StringTokenizer st = new StringTokenizer(br.readLine());
		H = Integer.parseInt(st.nextToken());
		W = Integer.parseInt(st.nextToken());
		map = new int[H][W];
		for (int i = 0; i < H; i++) {
			st = new StringTokenizer(br.readLine());
			for (int j = 0; j < W; j++) {
				map[i][j] = Integer.parseInt(st.nextToken())-2;
			}
		}
		
		// 섬 번호 표시
		n = 0;
		for (int i = 0; i < H; i++) {
			for (int j = 0; j < W; j++) {
				if(map[i][j]==-1) floodFill(i, j, n++);
			}
		}
		
		edges = new int[n][n];
		
		// 간선 계산
		int prev=-1, cur, cost=0;
		// 행
		for (int i = 0; i < H; i++) {
			cost = 0;
			prev = -1;
			for (int j = 0; j < W; j++) {
				cur = map[i][j];
				if(cur==-2) {
					cost++;
				} else if(cur!=prev) {
					if(prev!=-1 && cost>1) {
						if(edges[cur][prev]==0) edges[cur][prev] = cost;
						else edges[cur][prev] = Math.min(edges[cur][prev], cost);
						
						if(edges[prev][cur]==0) edges[prev][cur] = cost;
						else edges[prev][cur] = Math.min(edges[prev][cur], cost);
					}
					prev = cur;
					cost = 0;
				} else if(cur==prev) {
					cost = 0;
				}
			}
		}
		
		// 열
		for (int j = 0; j < W; j++) {
			cost = 0;
			prev = -1;
			for (int i = 0; i < H; i++) {
				cur = map[i][j];
				if(cur==-2) {
					cost++;
				} else if(cur!=prev) {
					if(prev!=-1 && cost>1) {
						if(edges[cur][prev]==0) edges[cur][prev] = cost;
						else edges[cur][prev] = Math.min(edges[cur][prev], cost);
						
						if(edges[prev][cur]==0) edges[prev][cur] = cost;
						else edges[prev][cur] = Math.min(edges[prev][cur], cost);
					}
					prev = cur;
					cost = 0;
				} else if(cur==prev) {
					cost = 0;
				}
			}
		}
		
		visited = new boolean[n];
		res = prim();
		System.out.println(res);
	}
	
	static int prim() {
		boolean[] visited = new boolean[n];
		PriorityQueue<Edge> q = new PriorityQueue<>();
		q.add(new Edge(0, 0));
		int cost = 0, cnt = 0;
		while(!q.isEmpty()) {
			Edge cur = q.poll();
			if(visited[cur.to]) continue;
			visited[cur.to]= true;
//			System.out.println(cur.to);
			cost += cur.cost;
			if(++cnt==n) return cost;
			for (int i = 0; i < n; i++)
				if(edges[cur.to][i]>0) q.add(new Edge(i, edges[cur.to][i]));
		}
		return -1;
	}
	
	public static final int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
	
	public static void floodFill(int y, int x, int num) {
		map[y][x] = num;
		for(int[] dir:dirs) {
			int ny = y + dir[0];
			int nx = x + dir[1];
			
			if(ny<0 || nx<0 || ny>=H || nx>=W) continue;
			if(map[ny][nx] != -1) continue;
			floodFill(ny, nx, num);
		}
	}
}
