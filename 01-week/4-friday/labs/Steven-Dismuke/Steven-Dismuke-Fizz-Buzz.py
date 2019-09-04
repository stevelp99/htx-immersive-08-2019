## Steven Dismuke
### Determine if numbers in a range are divisible by "3" and print "fizz", by "5" and print "buzz", and by "3 and 5" and print "fizzbuzz".
list=range(1,100)
for num in list:
    if num%3==0 and num%5==0:
        print("fizzbuzz")
    elif num%3==0:
        print("fizz")
    elif num%5==0:
        print("buzz")
    else:
        print(num)