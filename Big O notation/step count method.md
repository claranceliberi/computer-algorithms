## Step count method
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
means the actual steps should be  `(1 step * 1) + (1 step * (N + 1)) + (1 step * N) + (1 step * 1)`  

```
int mean(int a[], size_t n)

{
int sum = 0;                 // 1 step * 1
for (int i = 0; i < n; i++)  // 1 step * (N+1)
    sum += a[i];             // 1 step * N
return sum;                  // 1 step * 1
}
```
