#include <iostream>

using namespace std;

/**
 * @brief buble sort
 *  1.  - get current index
 *      - compare each element with the next one
 *      - if elements are different(less or greater), swap them
 *  2. repeat the same proccess for `size` times
 * 
 * Note: for optimization we can track the sorted part of the array
 * @param arr 
 * @param size 
 */

void bubleSort(int arr[], int size){
    int sorted = 0;

    for(int i=0; i<size; i++){
        for(int j = 0; j<size-(sorted + 1); j++)
            if(arr[j] > arr[j+1]){
                swap(arr[j], arr[j+1]);
            }

        sorted++;
    }
    
}

void printArr(int arr[], int size){
    for(int i = 0; i < size; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
}


int main(){

    int arr[] = {1,2,10,9,0,6,11,9,10};
    int size = 10;


    cout << "Unsorted array: " ;
    printArr(arr,size) ;
    
    
    bubleSort(arr, size);
    
    cout << "Sorted array: ";
    printArr(arr,size) ;

    return 0;
}

