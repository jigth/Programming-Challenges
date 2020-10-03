# calculate relationships of each chair with the next chairs. 
# Even i (odd chairs) with i+1, i+2 (next chairs). Last even i has only relationship with i+1
# Odd i (even chairs) with i+2. Last odd i has no next relationship
def calc_class_rels(number_of_chairs):
    class_rels = [0 for i in range(number_of_chairs-1)] # Initialization
    related_chairs = len(class_rels) # Chairs that are related to a NEXT chair
    j = 0  # Used to put the correct number of each chair
    for i in range(related_chairs):
        j = i+1 
        if i%2 == 0:  # Odd chairs
            if i != related_chairs-1: # If it isn't the last odd chair
                class_rels[i] = [j+1, j+2]
            else:
                class_rels[i] = [j+1]
        else:
            if i != related_chairs-1: # If it isn't the last even chair
                class_rels[i] = [j+2]
            # Else no relationship is added because we already did all the work
    return class_rels

def count_ways(class_rels, ocuppied_chairs):
    valid_ways = 0  # Number of valid ways we can sit 2 students together taking into account ocuppied_chairs
    for i in range(len(class_rels)):
        if i+1 not in ocuppied_chairs:  # If this is a free chair (i+1 because the 1st chair is the number 1, not the number 0)
            for j in range(len(class_rels[i])):  # Look up for its posibilities!
                if class_rels[i][j] not in ocuppied_chairs:
                    # Uncomment the next line if you want to see the exact possibilities!
                    # print('Found a valid way:', 'chairs:', (i+1), 'and', class_rels[i][j] ,'are free and next to each other')
                    valid_ways += 1
    return valid_ways


# Calculate the number of ways 2 students can sit together taking account ocuppied_chairs
# Valid input format [number_of_chairs, ocuppied_chair1, ocuppied_chair2, ..., ocuppied_chairN]
# Note the space between commas...
def SeatingStudents(arr):

    # Formatting input to work with it
    arr = arr.strip('[]').split(', ')  
    arr = list(map(int, arr))  # Convert all string elements into arr, to int elements

    # Get useful info from arr
    number_of_chairs = arr[0]
    ocuppied_chairs = arr[1:]

    class_rels = calc_class_rels(number_of_chairs)
    return count_ways(class_rels, ocuppied_chairs)
    
# keep this function call here  
print(SeatingStudents(input()))















# Calculate the "potential" ways that students can sit together (if classroom is empty)
# This is just a function that lets you calculate the maximum ways to sit 2 students together 
# for a given number (even) of chairs. It can be used to test if you paste it before the main function
def get_potential_ways(number_of_chairs):
    # Each even number X has 1 posibility forward (X+2) except for the last that has 0 posibilities
    even_potential = int(number_of_chairs/2 - 1)
    # Each odd number W has 2 posibilities forward, W+1 and W+2. Except the last one that has 1 posibility W+1
    # Last +1 adds the last posibility, first parentheses calculates the rest (2 per odd number)
    odd_potential = (even_potential * 2) + 1 
    potential_ways = even_potential + odd_potential
    return potential_ways