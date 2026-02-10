import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

//97~122
// a: 97, n: 110, t: 116, i: 105, c: 99

public class Main {
//	public static Scanner sc = new Scanner(System.in);
	public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	public static Set<Character> set = new HashSet<>();
	public static char[] defaultLetters = {'a', 'n', 't', 'i', 'c'};
	public static int N, K;
	public static int res = 0;
	public static ArrayList<HashSet<Character>> words;
	
	public static void main(String[] args) throws IOException {
		StringTokenizer st = new StringTokenizer(br.readLine());
		N = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());
//		sc.nextLine();
		
		words = new ArrayList<HashSet<Character>>();
		
		for (int i = 0; i < N; i++) {
			words.add(i, new HashSet<Character>());
			String word = br.readLine();
			
			for(char c:word.toCharArray())
				words.get(i).add(c);
		}
		
		for(char letter : defaultLetters) {
			set.add(letter);
		}
		// combination a,n,t,i,c를 제외한 21개 알파벳 K-1개
		if(K<5) {
			System.out.println(0);
			return;
		}
		combination(5, 0);
		System.out.println(res);
	}
	
	public static void combination(int depth, int start) {
		if(depth==K) {
			updateResult();
			return;
		}
		
		for(int i=start; i<26; i++) {
			Character c = (char) (97+i);
			if(set.contains(c)) continue;
			set.add(c);
			combination(depth+1, i+1);
			set.remove(c);
		}
	}
	
	public static void updateResult() {
		int tempRes = 0;
		for(HashSet<Character> word:words) {
			if(set.containsAll(word)) tempRes++;
		}
		res = Math.max(tempRes,res);
	}
}
