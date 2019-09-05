import Data
import Menu
import operations
#choice = int(input('''Select a number to choose options,(1-5): 
#1: Look up an Entry
#2: Set and Entry
#3: Delete an Entry
#4: List all Entries
#5: Quit
choice=Menu.selection()

while choice != 5:
    if choice == 1:
        operations.lookup(input("Enter a name: "))
        print("1")
    elif choice ==2:
        print("2")
    elif choice ==3:
        print("3")
    elif choice ==4:
        print("4")
    elif choice ==5:
        print("5")
    else:
        choice=Menu.selection()
choice=Menu.selection()