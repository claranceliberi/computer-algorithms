# Computer Algorithms

## Table of contents

1. [Introduction to Algorithm](#introduction-to-algorithm ) 
2. Algorithm Analysis & Complexity <br>
    2.1 Definitions <br>
    2.2 Complexity measures of the efficiency of an algorithm <br>
    2.3 Algorithm Efficiency <br>
    2.4 [Methods used to approximate the complexity of an algorithm](#methods-used-to-approximate-the-complexity-of-an-algorithm) <br>


## 1. Introduction to Algorithm 
What is algorithm ? <br> 
Basically algorithm is  a process or set of rules to be followed in calculations or problems solving, especially by computer

## 2. Algorithm Analysis & Complexity

### 2.1 Definitions
It is very common for beginning computer science students to compare their programs with one another. You may also have noticed that it is common for computer programs to look very similar, especially the simple ones. An interesting question often arises. When two programs solve the same problem but look different, is one program better than the other?
<br>
<br>
In order to answer this question, we need to remember that there is an important difference between a program and the underlying algorithm that the program is representing. As we stated in Chapter 1, an algorithm is a generic, step-by-step list of instructions for solving a problem. It is a method for solving any instance of the problem such that given a particular input, the algorithm produces the desired result. A program, on the other hand, is an algorithm that has been encoded into some programming language. There may be many programs for the same algorithm, depending on the programmer and the programming language being used.
<br>
<br>
So basically *analysis of Algorithms* is concerned primarily with determining the memory (space) and time requirements(complexity) of an algorithm. 
<br>
<br>
The *complexity of an algorithm* is a function describing the efficiency of the algorithm in terms of the amount of data the algorithm must process.
The factor of time is usually more important than that of space, so efficiency considerations usually focus on the amount of time elapsed when processing data.
To evaluate an algorithm’s efficiency, real-time units such as microseconds and nanoseconds should not be used. Rather, logical units that express a relationship between the size `n` of a file or an array and the amount of time t required to process the data should be used.

### 2.2 Complexity measures of the efficiency of an algorithm
There are only two main complexity measuere of an algorithm 

 - *Time complexity* is a function describing the amount of time an algorithm takes in terms of the amount of input to the algorithm. "Time" can mean the number of memory accesses performed, the number of comparisons between integers, the number of times some inner loop is executed, or some other natural unit related to the amount of real time the algorithm will take. We try to keep this idea of time separate from "wall clock" time, since many factors unrelated to the algorithm itself can affect the real time (like the language used, type of computing hardware, proficiency of the programmer, optimization in the compiler, etc.). It turns out that, if we chose the units wisely, all of the other stuff doesn't matter and we can get an independent measure of the efficiency of the algorithm

 - *Space complexity* is a function describing the amount of memory (space) an algorithm takes in terms of the amount of input to the algorithm. We often speak of "extra" memory needed, not counting the memory needed to store the input itself. Again, we use natural (but fixed-length) units to measure this. We can use bytes, but it's easier to use, say, number of integers used, number of fixed-sized structures, etc. In the end, the function we come up with will be independent of the actual number of bytes needed to represent the unit. Space complexity is sometimes ignored because the space used is minimal and/or obvious, but sometimes it becomes as important an issue as time.

 ### 2.3 Algorithm Efficiency
 Algorithm efficiency achieved when some criteria are used to design an alogorithm , among these criteria we have:

- *Correctness* : the algorithm / program does what what we expect it to do, without errors
- *Space*: how much memory does the program need to produce desired output ?
- *Speed of a computer* : on which the program will run (e.g., a smartphone, a google server , AWS, ...)
- *Time*: how long will it take the program to produce disired output?
- *The programming language*: used to implement algorithm (e.g., C, Python, Java, Javascript, ...)
- *The size of input*: ammount of value of input that is going to be inputed/ proccessed by algorithm


Realistically, for efficiency we will evaluate if the results are obtained within a time frame which is compatible with the time restrictions of the scenario of use of the program (and the shorter the time the better)

<br>
Efficiency is not optional, since a program might result unusable in practice if it takes too long to produce its output. However, some criteria like portability, modularity, maintainability, … are always useful, but in a sense also optional.

The efficiency of an algorithm to solve a particular problem is measured as a function of the problem size.
If `n` is the size of the problem, `t` is time complexity and `s` the space complexity, there is a relationship between the size `n` and time `t`, and a relationship between the size `n` and space `s`.
For example, we might say "this algorithm takes n<sup>2</sup> time," where `n` is the number of items in the input. Or we might say "this algorithm takes constant extra space," because the amount of extra memory needed doesn't vary with the number of items processed.
<br>
<br>
A function expressing the relationship between `n` and `t` is usually much more complex, and calculating such a function is important only in regard to large bodies of data; any terms that do not substantially change the function’s magnitude should be eliminated from the function.
The resulting function gives only an approximate measure of efficiency of the original function. However, this approximation is sufficiently close to the original, especially for a function that processes large quantities of data.
This measure of efficiency is called *asymptotic complexity* and is used when disregarding certain terms of a function to express the efficiency of an algorithm or when calculating a function is difficult or impossible and only approximations can be found.


 ### 2.4 Methods used to approximate the complexity of an algorithm
1. *Operation counts*
<br>
With this method we measure the perfomance of our algorithm by counting number of operations instead of manually timing it 
because the number of operations in your code is easy to standardize and remains consistent regaldless of computer, compared to manually timing our code.

so let's count operations in function `sumUpTo`

first method with `3` operations ( multiplication, adddition and division)
![image](https://user-images.githubusercontent.com/60586899/117758208-dc065700-b221-11eb-8836-548d4826ba30.png)

second method with `1 * N` operations ( one addition operation which will be repeated Nth time )
![image](https://user-images.githubusercontent.com/60586899/117758342-2982c400-b222-11eb-9549-abdd85a781a4.png)


so let us test this with actual code
here we have two functions , and we are going to measure how long it is going to take to accomplish the task 

![image](https://user-images.githubusercontent.com/60586899/117758902-250adb00-b223-11eb-954a-26f9ba6b3f7c.png)

Suprisingly, the time taken to accomplish the task is 
![image](https://user-images.githubusercontent.com/60586899/117759013-52578900-b223-11eb-910e-97ac0d8a9e10.png)


as you can see function A with 3 operations took 0 seconds ( not actually 0 in time but there are little microseconds which are rounded to 0) while B with 4 operations took 2.97 seconds
<br>
2. *Step counts*
<br>
The step count method is one of the methods to analyze the algorithm, In this method, we count the number of times one instruction is executing
 from that, we will try to find the complexity of the algorithm 
 
 consider having these codes, what we actually do we count the number of steps of lines of codes that are going to be executed
 
 by this code, we may say that we have 4 steps ✌️
 ```
 int mean(int a[], size_t n)

{

int sum = 0;                 // 1 step
for (int i = 0; i < n; i++)  // 1 step
    sum += a[i];             // 1 step
return sum;                  // 1 step
}
```

but the wait is it actually only 4 steps, while we have some conditional statements and which may iterate, 
by iterating the code re-execute them selves according to the number of times possible in the condition 
means the actual steps should be  
    `(1 step * 1) + (1 step * (N + 1)) + (1 step * N) + (1 step * 1)`  
    => `1 step + 1 step * (N + 1) + 1 step * N + 1 step `  
    => `2 step + 1 step * (N + 1) + 1 step * N`  

```
int mean(int a[], size_t n)

{
int sum = 0;                 // 1 step * 1
for (int i = 0; i < n; i++)  // 1 step * (N+1)
    sum += a[i];             // 1 step * N
return sum;                  // 1 step * 1
}
```
3. *Counting cache misses*
<br>
In algorithm analysis, we count the operations and steps. This is basically justified when the computer takes more time to perform an operation than it took to fetch the data needed for that operation. Nowadays the cost of performing an operation is significantly lower than the cost of fetching data from memory.

The run time of many algorithms is dominated by the number of memory references (number of cache misses) rather than by the number of operations. So, when we will try to desing some algorithms, we have to focus on reducing not only the number of operations but also the number of memory accesses. Also, have to focus on designing algorithms that hide memory latency.

Suppose there is a simple computer model in which the computer’s memory consists of an L1 cache, an L2 cache, and main memory. We perform some Arithmetic and logical operations using ALU on data resident in registers (R)

This is the block diagram of it −

![image](https://user-images.githubusercontent.com/60586899/117792893-fead6580-b24b-11eb-987c-a0f3a19b37cb.png)


From the diagram, we can also get some knowledge about the size of memory and caches. Main memory is basically hundreds or thousands of MB. Where L2 cache is some fraction of MBs and L1 caches are some KBs. The register size is some bits. When we execute a program, all data in memory. If we add some operation like ADD, then the first number will be stored into the register, the data in registers are added, then the result is written into memory.

Let one cycle be the length of time that will need to add data that are already in registers. The time is needed to load data from the L1 cache to a register is suppose two cycles in this model. If the required data are not in the L1 cache but present in the L2 cache, we get an L1 cache miss and the required data are taken from the L2 cache to the L1 cache and the register in 10 cycles. When our required data are not in the L2 cache also, we have an L2 cache miss and the required data will be taken from the main memory into the L2 cache, L1 cache, and the register in 100 cycles. Then the write operation is counted as one cycle even when the data are written to the main memory because we do not wait for the complete write before proceeding to the next operation

4. *Asymptotic complexity*

Note: better to learn basics of `Linear search`and `Binary search` and just understand only difference

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


5. Recurrence equations
6. Amortized complexity
7. Practical complexities
