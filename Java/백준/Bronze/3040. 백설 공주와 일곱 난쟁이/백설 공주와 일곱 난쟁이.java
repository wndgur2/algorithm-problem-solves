import java.util.Scanner;

public class Main {
	
	public static void main(String[] args){
		new Main().solve();
	}

	int[] numbers;
	int[] input;
	final int N = 9;
	final int R = 7;
	public void solve(){
		Scanner sc = new Scanner(System.in);
		input = new int[N];
		numbers = new int[R];
		for (int i = 0; i < N; i++) {
			input[i] = sc.nextInt();
			sc.nextLine();
//			System.out.println(input[i]);
		}
		combination(0, 0);
	}
	
	public void combination(int depth, int start) {
		if(depth == R) {
			if(sum(numbers) == 100) {
				for(int n: numbers) {
					System.out.println(n);
				}
			}
//			System.out.println(Arrays.toString(numbers));
			return;
		}
		
		for (int i = start; i < N; i++) {
			numbers[depth] = input[i];
			combination(depth+1, i+1);
		}
	}
	
	public int sum(int[] nums) {
		int res = 0;
		for(int n: nums) res+=n;
		return res;
	}
}