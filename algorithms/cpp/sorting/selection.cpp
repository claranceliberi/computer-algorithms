#include <iostream>
#include <vector>

using namespace std;

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