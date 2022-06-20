#include <iostream>

using namespace std;

/**
 * @brief the product of all positive inteager less than or equal to the given n
 * 
 * let us say that n=5;
 * 5 factorial is mostly denoted by 5!
 * 5! = 5*4*3*2*1
 * 
 * The function will be working like
 * 
 * 
 * @param n 
 * @return int 
 */

int factorial(int n){
    if(n > 1)
        return n * factorial(n-1);
    else 
        return 1;
}

int main(){
    cout << factorial(5) << endl;
    return 0;
}