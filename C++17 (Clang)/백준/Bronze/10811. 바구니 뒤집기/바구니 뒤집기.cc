#include <iostream>
#include <vector>

using namespace std;

int n, m;
vector<int> basket;

void filp(int a, int b)
{
    vector<int> temp(b-a+1);
    for (int i=a; i<=b; ++i)
    {
        temp[i-a] = basket[i];
    }

    for (int i=a; i<=b; ++i)
    {
        basket[i] = temp[b - (i-a) - a];
    }
}

int main()
{
    cin >> n >> m;
    basket.resize(n+1);
    for (int i=0; i<n+1; ++i)
    {
        basket[i] = i;
    }
    for (int i=0; i<m; ++i)
    {
        int a, b;
        cin >> a >> b;
        filp(a, b);
    }

    for (int i=1; i<=n; ++i)
    {
        cout << basket[i] << " ";
    }
    cout << endl;
    return 0;
}