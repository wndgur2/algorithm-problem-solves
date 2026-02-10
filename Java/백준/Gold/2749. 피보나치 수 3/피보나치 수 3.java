import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
	PisanoPeriod
	- 피보나치 수를 어떤 수 M으로 나눌 때, 나머지는 항상 같은 주기를 가지게 된다.
	
 */

public class Main {

	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = (int)(Long.parseLong(br.readLine())%1500000);
		int[] dp = new int[1500001];
		dp[0] = 0;
		dp[1] = 1;
		for (int i = 2; i <= n; i++) {
			dp[i] = dp[i-1] + dp[i-2];
			dp[i] %= 1000000;
		}
		System.out.println(dp[n]);
	}
}
