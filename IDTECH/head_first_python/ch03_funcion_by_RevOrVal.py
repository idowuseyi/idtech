def double(arg):
  print('Before: ', arg)
  arg = arg * 2
  print('After:', arg)


def change(arg):
  print('Before: ', arg)
  arg.append('More data')
  print('After: ', arg)
  
  
if __name__ == "__main__":
  # print(double(['a', 'b', 'c', 'd']))
  # print(change(['a', 'b', 'c', 'd']))
  print(double("sola"))
  
  