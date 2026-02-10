#include <iostream>
#include <vector>
using namespace std;
vector<int> parents;
int find(int num)
{
    if (parents[num] == num)
        return num;
    return parents[num] = find(parents[num]);
}
void merge(int num1, int num2)
{
    int x = find(num1);
    int y = find(num2);
    if (x < y)
    {
        parents[y] = x;
    }
    else
    {
        parents[x] = y;
    }
}
int main()
{
    ios::sync_with_stdio(0), cin.tie(0);
    int n, m, x, a, b;
    cin >> n >> m;
    parents = vector<int>(n + 1);
    for (int i = 1; i <= n; ++i)
        parents[i] = i;
    while (m--)
    {
        cin >> x >> a >> b;
        if (x)
        {
            if (find(a) == find(b))
                cout << "YES";
            else
                cout << "NO";
            cout << "\n";
        }
        else
        {
            merge(a, b);
        }
    }
    return 0;
}