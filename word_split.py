def WordSplit(strArr): 

    # code goes here 
    target_word = strArr[0]
    dictionary = strArr[1].split(',')  # Convert dictionary to a list
    
    ''' Get list of Candidates to make the target word'''
    firsts = []  # Candidates to first part of target_word
    lasts = []  # Candidates to second part of target_word
    for word in dictionary:
      if target_word.startswith(word):
        firsts.append(word)
      elif target_word.endswith(word):
        lasts.append(word)
        
    ''' Try matching them until they form the target word (or not) '''
    for first in firsts:
      for last in lasts:
        if first+last == target_word:
          return first+','+last
        
    return "not possible"
    
# keep this function call here  
print(WordSplit(input()))
