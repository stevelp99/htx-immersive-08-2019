# PROBLEM 1 & 2: user imputs a name and a subject and returns a string.
name = str(input("Enter your name: "))
print (name)
print (f" {name.upper()}, how's it going?")
print('''
=====================================================================''')
# PROBLEM 3: script outputs user name and favorite subject.
subject = str(input("Enter a subject: "))
print (f'{name}\'s favorite subject in school is {subject}.') 
print('''
=====================================================================''')
# PROBLEM 4 & 5: user give a day in numerical format, and returns the day of the week.
day = int(input("Enter a number between 0-6: "))
if day == 0:
    print ("Today is Sunday, sleep in")
elif day == 1:
    print ("Today is Monday, go to work")
elif day == 2:
    print ("Today is Tuesday, go to work")
elif day == 3:
    print ("Today is Wednesday, go to work")
elif day == 4:
    print ("Today is Thursday, go to work")
elif day ==5:
    print ("Today is Friday, go to work")
elif day ==6:
    print ("Today is Saturday, sleep in")
else:
    print ("invalid")
print('''
======================================================================''')
# PROBLEM 6: user enters a temop in celsius, and returns the temp in fahrenheit.
tempC= int(input("Enter a temp in Celsius: "))
tempF= tempC*1.8+32
print (f'The tempature is {tempF} degrees fahrenheit.')
print('''
======================================================================''')
# PROBLEM 7 & 8: user enters a bill total and quality of service to determine total bill cost split between people.
food=float(input("Enter cost of food: "))
qos= (input("Tell us how was the service, good, fair, or bad: "))

if qos == "good":
    tip=20/100
    total=(food+(food*tip))
    print(format(total, ".2f") + " dollars.")
elif qos == "fair":
    tip=15/100
    total=(food+(food*tip))
    print("The total is " +format(total, ".2f") + " dollars.")
elif qos == "bad":
    tip=10/100
    total=(food+(food*tip))
    print("The total is " + format(total, ".2f") + " dollars.")
else:
    total=food
    print("The total is "+format(total, ".2f")+", no tip")

people = float(input("Enter how many people: "))
bill = total/people
print ("Each person will pay "+ format(bill, ".2f")+" dollars.")
print('''
=======================================================================''')
# Problem 9: uses a look to count from 1 to 10.
a = 1
while a <= 10:

    print(a)
    a += 1
print('''
=======================================================================''')
# Problem 10: counting coins
coin=0
coinstart=int(input("Enter a starting amoiunt of coins: "))
coin+=coinstart
print (f'You have {coin} coins')
choice= str(input("Would you like another coin? yes or no: "))
while coin>1:
    if choice=="yes":
        coin+=1
        print (f'You have {coin} coins.')
        choice= str(input("Would you like another coin? yes or no: "))
    elif choice =='no':
        coin +=0
        print (f'You have {coin} coins.')
        break