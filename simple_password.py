import re
import string

def has_punctuation(str):
  punctuation = string.punctuation
  for char in str:
    if char in punctuation:
      return True
  return False

def SimplePassword(str): 
    if re.search('[A-Z]', str) is not None:  # At least 1 Capital letter
      if re.search('[0-9]', str) is not None:  # At least 1 number
        if has_punctuation(str):  # Has at least 1 punctuation sign
          if "password" not in str.lower():  # Password doesn't contains 'password'
            if len(str) >= 7 and len(str) <= 31:  # Password len between 7 and 31
              return True
    return False
          
    # code goes here 
    return str
    
# keep this function call here  
print SimplePassword(raw_input())
