#include <iostream>

 using namespace std;


void merge(int array[], int p, int q, int r){

    int n1 =  q-p + 1;
    int n2 = r-q;

    int sub1[n1],sub2[n2];

    // fill elements in first subarray
    for(int i=0; i<n1; i++)
        sub1[i] = array[p+i];


    //fill elements in second subarray
    for(int j=0; j<n2; j++){
        sub2[j] = array[q+j+1];
    }

    int i,j,k;
    i=0;
    j=0;
    k=p;

    // add element in a sorted way
    while(i<n1 && j<n2){
        if(sub1[i] <= sub2[j]){
            array[k] = sub1[i];
            i++;
            k++;
        }else{
            array[k] = sub2[j];
            j++;
            k++;
        }
    }

    // let also add all unsorted elements

    while(i<n1){
        array[k] = sub1[i];
        i++;
        k++;
    }

    while(j<n2){
        array[k] = sub2[j];
        j++;
        k++;
    }
    


}

void mergeSort(int array[], int p, int r){
    if(p>=r)
        return;

    int q = p + (r-p)/2;

    mergeSort(array,p,q);
    mergeSort(array,q+1,r);

    // merge the sorted array
    merge(array,p,q,r);
}

// Print the array
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++)
    cout << arr[i] << " ";
  cout << endl;
}



 int main(){
    int arr[] = {6, 5, 12, 10, 9, 1,11,23,0,5};
    int size = sizeof(arr) / sizeof(arr[0]);
    mergeSort(arr,0,size);


    cout << "Sorted array: \n";
    printArray(arr, size);

    return 0;
 }