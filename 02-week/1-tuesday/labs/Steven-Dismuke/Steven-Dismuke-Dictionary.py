# Problem 1: Given the following dictionary, representing a mapping from names to phone numbers. Print Elizabeth's number, delete Alice, change Bob's
# number and print all entries.

phonebook_dict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
} 
print(phonebook_dict['Elizabeth'])
phonebook_dict['Kareem'] = '938-489-1234'
print(phonebook_dict)
del phonebook_dict['Alice']
print (phonebook_dict)
phonebook_dict['Bob']='968-345-2345'
print(phonebook_dict)
print('''
=========================================''')
# Problem 2: Write a python expression that gets the email address of Ramit.
# Write a python expression that gets the first of Ramit's interests.
# Write a python expression that gets the email address of Jasmine.
# Write a python expression that gets the second of Jan's two interests.

ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
     {
       'name': 'Jasmine',
       'email': 'jasmine@yahoo.com',
       'interests': ['photography', 'tennis']
     },
     {
        'name': 'Jan',
        'email': 'jan@hotmail.com',
        'interests': ['movies', 'tv']
     }
    ]
}
print(ramit['email'])
print(ramit['interests'][0])
print(ramit['friends'][0]['email'])
print(ramit['friends'][1]['interests'][1])
print('''
==============================================''')
# Problem 3: Letter Summary
# Write a script that takes a word as its input, and returns a dictionary containing the tally of how many times each letter 
# in the alphabet was used in the word. For example:
# {'a': 3, 'b': 1, 'n': 2} # ex: banana
word = (input("Enter a word: "))
alpha = {}
for letter in word:
    char=alpha.keys()
    if letter in char:
        alpha[letter] += 1 
    else:
        alpha[letter] = 1

print (alpha)
print('''
==============================================''')
# Problem 4: Word Summary
#W rite a script that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times 
# each word in the alphabet was used in the text. For example:
#>>> word_histogram('To be or not to be')
#{'to': 2, 'be': 2, 'or': 1, 'not': 1}
