import java.io.*;

public class Main {
    static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
    public static void main(String[] args) throws IOException {
        String[] NK = br.readLine().split(" ");
        int N = Integer.parseInt(NK[0]);
        int K = Integer.parseInt(NK[1]);
        boolean[] isErased = new boolean[N+1];
        int erasedN = 0;

        for(int i=2; i<=N; ++i){
            if(isErased[i]) continue;
            for(int j=i; j<=N; j+=i){
                if(!isErased[j]){
                    isErased[j] = true;
                    erasedN ++;
                    if(erasedN == K){
                        System.out.println(j);
                        return;
                    }
                }
            }
        }
    }
}
