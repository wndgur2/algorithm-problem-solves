#include <string>
#include <vector>
typedef unsigned long long ll;
#define HASH_SIZE (1 << 28)
#define DIV (HASH_SIZE - 1)

using namespace std;
int getKey(string str)
{
    ll key = 285231;

    for (int i = 0; str[i]; ++i)
    {
        key = ((key << 6) + key) + (str[i]);
    }

    return (int)(key & DIV);
}
bool solution(vector<string> phone_book)
{

    bool hashTable[HASH_SIZE];
    for (int i = 0; i < phone_book.size(); ++i)
    {
        hashTable[getKey(phone_book[i])] = true;
    }
    for (int i = 0; i < phone_book.size(); ++i)
    {
        for (int j = 1; j < phone_book[i].length(); ++j)
        {
            if (hashTable[getKey(phone_book[i].substr(0, j))])
                return false;
        }
    }
    return true;
}