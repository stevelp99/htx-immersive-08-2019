#Write a function that accepts two arguments: a name and a subject.
#The function should return a String with the name and subject interpolated in.
#For example:
#madlib("Jenn", "science") # "Jenn's favorite subject is science." madlib("Jeff", "history") # "Jeff's favorite subject is history."
#Provide default arguments in case one or both are omitted.

 #   subject = str(input("Enter a subject: "))
#print (f'{name}\'s favorite subject in school is {subject}.')

def seperate():
    print('''
========================================================''')
seperate()
C_to_F = int(input("Enter a temperature in Celsius to convert to Fahrenheit: "))
def temp(C_to_F):
    return C_to_F*1.8+32
print (f'The converted temp is {temp(C_to_F)} degrees Fahrenheit.')
seperate()



#trial = age % 2
#if trial == 0:
#   print("Your age is an even number.")
#if trial != 0:
#    print ("Your age is an odd number.")

