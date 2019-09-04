print('''
====================
Electronic Phonebook
====================''')
phonebook = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
}
choice = str(input('''Select a number to choose options,(1-5): 
1: Look up an Entry
2: Set and Entry
3: Delete an Entry
4: List all Entries
5: Quit
 
'''))

if choice == "1":
    username=str(input("Enter a name: "))
    print (username)
    print(phonebook[username])
elif choice =="2":
    username_add=str(input("Enter a name to set: "))
    num=str(input("Enter a phone number: "))
    phonebook[username_add]=num
    print (f'Entry stored for {username_add}')
    #print(phonebook)
elif choice == "3":
    username_delete= str(input("Enter a name to delete: "))
    del phonebook[username_delete]
    print(f'{username_delete} has been removed from the phonebook')
    #print(phonebook)
elif choice == "4":
    print(phonebook)
elif choice == "5":
    print("Bye")
