#include <iostream>

using namespace std;

int isHan(int n) { //110
	int nowNum, prevNum = -1, nowDif, prevDif = 10;
	for (; n > 0; n/= 10) {
		nowNum = n % 10; //0, 1

		if (prevNum >= 0) { //0
			nowDif = nowNum - prevNum;
			if (prevDif == 10) prevDif = nowDif;
			else if (prevDif != nowDif) return -1;
		}

		prevNum = nowNum; //0
	}

	return 1;
}

int main() {
	int inputNum, result = 0;

	cin >> inputNum;
	for (int i = 1; i <= inputNum; i++) if (isHan(i) == 1) result++;
	cout << result;

	return 0;
}