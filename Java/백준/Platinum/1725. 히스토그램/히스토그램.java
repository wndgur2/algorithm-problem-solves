import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Arrays;

public class Main {
	static int N, res;
	static int[] heights;
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		
		heights = new int[N];
		
		for (int i = 0; i < N; i++)
			heights[i] = Integer.parseInt(br.readLine());
		
		res=0;
		ArrayDeque<int[]> stack = new ArrayDeque<>();
		
		for (int i = 0; i < N; i++) {
			int idx=i;
			while(!stack.isEmpty() && stack.peekFirst()[1] > heights[i]) {
				int[] top = stack.pop();
				idx = top[0]; // farthest index bigger than me
				
				int size = (i-top[0]) * top[1];
				res = size>res?size:res;
			}
			
			if(!stack.isEmpty()) {
				int[] top = stack.peekFirst();
				if(top[1]==heights[i]) {
					// stay
				} else { // top[1] < heights[i]
					stack.addFirst(new int[] {idx, heights[i]});
				}
			} else {
				stack.addFirst(new int[] {idx, heights[i]});
			}
			
//			for (int[] el: stack) {
//				System.out.println(Arrays.toString(el));
//			}
//			System.out.println();
//			System.out.println(res);
//			System.out.println();
		}
		while(!stack.isEmpty()) {
			int[] top = stack.pop();
			int size = (N-top[0]) * top[1];
			res = size>res?size:res;
		}
		
		System.out.println(res);
	}
}
