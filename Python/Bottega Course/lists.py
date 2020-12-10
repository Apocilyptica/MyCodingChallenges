# To start out the section on Python data structures we're going to start talking about Python lists. Now a list in Python if you're coming from other programming languages is like an array. It is a collection of values and that collection can be added to. You can remove items. You can query elements inside of it.

users = ["Kristine", "Tiffany", "Jordan"]
print(users)

# Add to list
users.insert(0, "Anthony")
print(users)

# Add to end of list
users.append("Ian")
print(users)

# query user from users
print(users[2])

# replace user from users
users[4] = "James"
print(users)