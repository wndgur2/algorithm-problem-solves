import java.io.*;
import java.util.*;

public class Main {
	static int N;
	static int[] numbers, tree;
	static final int MAX_VALUE = 1000000000;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringBuilder sb = new StringBuilder();
		N = Integer.parseInt(st.nextToken());
		int Q = Integer.parseInt(st.nextToken());
		
		numbers = new int[N];
		tree = new int[N*4];
		
		for (int i = 0; i < N; i++) {
			numbers[i] = Integer.parseInt(br.readLine());
		}
		
		makeTree();
//		System.out.println(Arrays.toString(tree));
		for (int i = 0; i < Q; i++) {
			st = new StringTokenizer(br.readLine());
			int from = Integer.parseInt(st.nextToken())-1;
			int to = Integer.parseInt(st.nextToken());
			sb.append(getMin(from, to, 0, N, 1)).append('\n');
		}
		System.out.println(sb.toString());
	}
	private static void makeTree() {
		make(0, N, 1);
	}
	private static int make(int curFrom, int curTo, int curNode) {
		//// !
		if(curFrom == curTo-1) {
			tree[curNode] = numbers[curFrom];
		} else {
			int mid = (curFrom+curTo+1)/2;
			tree[curNode] = Math.min(make(curFrom, mid, curNode*2), make(mid, curTo, curNode*2+1));
		}
		return tree[curNode];
	}
	private static int getMin(int from, int to, int curFrom, int curTo, int curNode) {
		if(to <= curFrom || from >= curTo) return MAX_VALUE;
		
		if(from<=curFrom && to>=curTo) return tree[curNode];
		
		int mid = (curFrom+curTo+1)/2;
		return Math.min(getMin(from, to, curFrom, mid, curNode*2), getMin(from, to, mid, curTo, curNode*2+1));
	}
}
