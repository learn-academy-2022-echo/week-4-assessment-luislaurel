# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# created a method called odd_or_even take in param of num
# use % to check if num is even
# string interpolation 
# catch all for odds
# print it out

def odd_or_even num
    if num % 2 == 0
   "#{num} is Even "
    else 
    "#{num} is Odd"
    end
end 
p odd_or_even num1
p odd_or_even num2
p odd_or_even num3
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create method named takes_string, param of string
# takes in beatles_album1,2,3
# look for something to look for aeiou, might have to create an array and iterate?
# or use .include, look for something to remove? Found .tr which would remove aeiou once put in parameters just have to replace with something
# output - 'Rbbr Sl', 'Sgt Pppr', 'bby Rd' 
# used split to break into an array, then had to perm downcase! otherwise 'A' wouldn't be evaluated 
# used tr to replace aeiou with a space '' - this removed them basically and returned a string
def takes_string string

    string.split('')
    string.downcase!
    string.tr('aeiou', '')
    
end
p takes_string beatles_album1
p takes_string beatles_album2
p takes_string beatles_album3
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# create method named palindrome
# need to downcase or will run into an issue with cap letters not being evaluated, like previous question
# takes in palindrome_tester1,2,3
# create conditonal 
# use .reverse
# create new var to store the string.downcase then compare
# create a new var to store the string downcase
# output tells me if it is or isn't a palindrome

# no issues with downcase here, don't know why

def palindrome string 
     reversestr = string.downcase
    if reversestr == string.downcase.reverse
     puts "#{string} is a palindrome"
    else 
     puts "#{string} isn't a palindrome"
    end 
end
palindrome palindrome_tester1
palindrome palindrome_tester2
palindrome palindrome_tester3