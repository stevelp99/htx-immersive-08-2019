#Problem 1: Using a for loop and the range function, print out the numbers between 1 and 10 inclusive, one on a line.
range1 =range(1,10)
for x in range1:
    print(x)
print('''
==================================''')
# Problem 2: Same as the previous problem, except you will prompt the user for the number to start on and the number to end on.
num_user_start=int(input("Enter a starting number: "))
num_user_end=int(input("Enter a ending number: "))
range2=range(num_user_start,num_user_end)
print(range2)
for x in range2:
    print(x)
print('''
==================================''')
# Problem 3: Print each odd number between 1 and 10 inclusive.
range3=range(0,10)
for y in range3:
    if y%2==1:
        print(y)
print('''
==================================''')
# Problem 4: Print a 5x5 square of * characters.
matrix = [[2,6],[6,2],[8,2],[5,12]]
print(x[2])
print(x[2][1])