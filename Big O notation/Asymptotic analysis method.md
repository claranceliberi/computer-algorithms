### Asymptotic analysis method.md

#### prerequesites 
   you must know 
   - Linear search
   - Binary search

Asymptotic Analysis is the big idea that handles above issues in analyzing algorithms. In Asymptotic Analysis,
we evaluate the performance of an algorithm in terms of input size (we don’t measure the actual running time). 

<br>

We calculate, how the time (or space) taken by an algorithm increases with the input size.
For example, let us consider the search problem (searching a given item) in a sorted array. 
One way to search is Linear Search (order of growth is linear) and the other way is Binary Search (order of growth is logarithmic).
To understand how Asymptotic Analysis solves the above mentioned problems in analyzing algorithms, 
let us say we run the Linear Search on a fast computer A and Binary Search on a slow computer B and we pick the constant values for the two computers so that 
it tells us exactly how long it takes for the given machine to perform the search in seconds. 

<br>

Let’s say the constant for A is 0.2 and the constant for B is 1000 
which means that A is 5000 times more powerful than B. For small values of input array size n, the fast computer may take less time. But, after a certain value of input 
array size, the Binary Search will definitely start taking less time compared to the Linear Search even though the Binary Search is being run on a slow machine. The reason is 
the order of growth of Binary Search with respect to input size is logarithmic while the order of growth of Linear Search is linear. So the machine dependent constants can always 
be ignored after a certain value of input size
<br>
Here are some running times for this example:
 - Linear Search running time in seconds on A: 0.2 * n
 - Binary Search running time in seconds on B: 1000*log(n)



|n      | Running time on A | Running time on B |
|-------|-------------------|-------------------|
|10     | 2 sec             | ~ 1 h             |
|100    | 20 sec            | ~ 1.8 h           |
|10^6   | ~ 55.5 h          | ~ 5.5 h           |
|10^9   | ~ 6.3 years       | ~ 8.3 h           |


<br>
Reference:
  [geeks for geeks](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)
