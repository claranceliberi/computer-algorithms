#include <iostream>
#include <vector>

using namespace std;

// [3,2,4,5,1,0]
// - 3 is sorted by default since it is the first element
// - we compare 2 with 3, since  2 is less than 3 we insert 2 at the beginning => [2,3,4,5,1,0]
// - we compare 4 with 3, sincd 4 is greatter than 3 we don't need to do anything it is sorted per now => [2,3,4,5,1,0]
// - we compare 5 with 4 , since 5 is gratter than the last element of the sorted left side we do nothing per now => [2,3,4,5,1,0]
// - we compare 1 with 5, since 1 is less than  5 we compare  1 with previous number to 5 which is 4 and since 1 is less than 4 we
//      we continue until we find the element that 1 is greater than , if none we insert it at the first place  => [1,2,3,4,5,0]
// - we compare 0 with five since 0 is less than 5 we repeat the above step => [1,2,3,4,5,0]


vector<int> insertionSort(vector<int> array){
    int val = array.at(1);
    int size = array.size();
    
    for(int i=1; i<size; i++){
        int current = array.at(i);
        int lessThanWholeLeftPart = true;

        //remember that the whole left part is sorted
        // so if this number is greater than its previous number
        // means its is already sorted
        if(current > array.at(i-1))
            continue;

        for(int j=i-1; j>=0; j--){
            if(current > array.at(j)){
                lessThanWholeLeftPart = false;
                array.erase(array.begin() + i);
                array.insert(array.begin() + j + 1,current);
                break; // since we found the number we must break the loop
                
            }
        }

        if(lessThanWholeLeftPart){
            array.erase(array.begin() + i);
            array.insert(array.begin(),current);
        }
    }

    return array;
}

int main(){
    // vector<int> array = {3,2,4,5,1,0,100,3,44,54,10};
    vector<int> array = {3,2,4,5,1,0,100,-2,3,-6,-22,44,54,10};
    
	for(int a: insertionSort(array))
		cout<< a << "," ;


	cout << endl;
    
    return 0;
}