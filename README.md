# Computer Algorithms

## Table of contents

    1. Introduction to Algorithm 
    2. Algorithm Analysis & Complexity
        2.1 Definitions
        2.2 Complexity measures of the efficiency of an algorithm


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