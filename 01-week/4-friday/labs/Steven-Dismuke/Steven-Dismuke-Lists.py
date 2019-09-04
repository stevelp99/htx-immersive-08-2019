# PROBLEM 1 :Given a list of numbers, print their sum. When I say given something, just make something up and store it in a variable.

list=(1,2,3,4,5,6,7,8,9)
print (f'The sum of the list is{sum(list)}')
print('''
===================================''')
#Problem 2: Given a list of numbers, print the largest of the numbers.

list2= range(1,20)
print (f'the largest number is {max(list2)}')
print('''
===================================''')
#Problem 3: Given a list of numbers, print the smallest of the numbers.
list3= range (2,19)
print(f'The lowest number is {min(list3)}')
print('''
===================================''')
#Problem 4: Given a list of numbers, print each number in the list that is even.

list4= range(1,100)
for num1 in list4:
    if num1 %2 ==0:
        print (num1)
print('''
===================================''')
#Problem 5: Given a list of numbers, print each number in the list that is greater than zero.
list5 = range(-10,11)
for num2 in list5:
    if num2 >0:
        print(num2)
print('''
===================================''')
#Problem 6: Given a list of numbers, create a new list which contains every number in the given list which is positive.

num4=[]
for num3 in range(-3,6):
    if num3>0:
    print(num4.append(num3))