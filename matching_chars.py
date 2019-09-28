def calc_dist(comp_char, trimmed_str):
    trimmed_str = trimmed_str  #.lower()  # Optional, case insensitive
    diff_chars = set(trimmed_str)  # Set of different chars in the passed string
    return len(diff_chars)

def get_max_distance(my_string, max_dist=0):
    if len(my_string) < max_dist or len(my_string) <= 2: # Diferent between chars letters  == 0
        return max_dist
    else:
        comp_char = my_string[0]
        lngst_match = my_string.rfind(comp_char) # Last ocurrence of that char

        # If at least we have 1 different char between same letter
        if lngst_match >= 1:
            dist = calc_dist(comp_char, my_string[1:lngst_match])
            if dist > max_dist:
                max_dist = dist

        return get_max_distance(my_string[1:], max_dist)

my_string = str(input("Please enter a string:\n"))
res = get_max_distance(my_string)
print(res)
