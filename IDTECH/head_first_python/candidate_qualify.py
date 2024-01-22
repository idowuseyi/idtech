

def interview(res, t):
    if len(res) < 8 or t > 120 or res[0]+res[1] > 10 or res[2]+res[3] > 20 or res[4]+res[5] > 30 or res[6]+res[7] > 40:
        return "disqualified"
    else:
        return "qualified"
    


print(interview([5, 5, 10, 10, 15, 15, 20, 20], 120))
print(interview([2, 3, 8, 6, 5, 12, 10, 18], 64))
print(interview([5, 5, 10, 10, 25, 15, 20, 20], 120))
print(interview([5, 5, 10, 10, 15, 15, 20], 120))
print(interview([5, 5, 10, 10, 15, 15, 20, 20], 130))
