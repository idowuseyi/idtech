from datetime import datetime
import time
today = time.strftime("%A %p")
print("We are still : ", today)
condition = input('How are you feeing: ')
if today == 'Saturday':
  print('Party!')
elif today == 'Sunday':
  if condition == 'Headache':
    print('Recover, then rest.')
  else:
    print('Rest.')
else:
  print('Just a little more; Work, work, work.')