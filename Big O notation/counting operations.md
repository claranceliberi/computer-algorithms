### Counting operations method in Big O
with this method we measure the perfomance of our algorithm by counting number of operations instead of manually timing it 
becoue the number of operations in your code is easy to standadize and remains consistend regaldless of computer, compared to manually timing our code

so lets count operations in function `sumUpTo`

first method with `3` operations ( multiplication, adddition and division)
![image](https://user-images.githubusercontent.com/60586899/117758208-dc065700-b221-11eb-8836-548d4826ba30.png)

second method with `1 * N` operations ( one addition operation which will be repeated Nth time )
![image](https://user-images.githubusercontent.com/60586899/117758342-2982c400-b222-11eb-9549-abdd85a781a4.png)


so let us test this with actual code
here we have two functions , and we are going to measer how long it is going to tak to accomplishe task 

![image](https://user-images.githubusercontent.com/60586899/117758902-250adb00-b223-11eb-954a-26f9ba6b3f7c.png)

suprisingly the time took to accomplish task is 
![image](https://user-images.githubusercontent.com/60586899/117759013-52578900-b223-11eb-910e-97ac0d8a9e10.png)


as you can see function A with 3 operations took 0 seconds ( not actually 0 in time but there are little microseconds which are rounded to 0) while B with 4 operations took 2.97 seconds

