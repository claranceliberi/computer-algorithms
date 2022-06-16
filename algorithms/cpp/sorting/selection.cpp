#include <iostream>
#include <vector>

using namespace std;

/**
 * @brief insertion sort takes it simple by going into the entire array and find the smalles value
 * when found we swap it with the the first element of array
 * and then since the first element is sorted we point on second element
 * we search with the rest of the array and if we find the element which is smaller than the pointed element we swap them unless
 * we do nothing we repeat the proccess until we point on the last element
 * 
 * @param array 
 * @return vector<int> 
 */
vector<int> selectionSort(vector<int> array){
    int size = array.size();
    int min = array.at(0);
    int minIndex = 0;
	bool toSwap = false;

    for(int i=0; i<size; i++){
		min = array[i];

        for(int j=i; j<size; j++){
            if(array[j] < min){
                minIndex = j;
				min = array.at(j);
				toSwap = true;
			}
        }


		if(toSwap)
	        swap(array[i],array[minIndex]);
		toSwap = false;

		
    }

	return array;
}

int main(){
	vector<int> array = {3,4,2,0,3,11,32};

	for(int a: selectionSort(array))
		cout<< a << "," ;


	cout << endl;

    return 0;
}