import os
import sys
from datetime import datetime
import time

My_system_details = {"OS_type": sys.platform, "python_version": sys.version, "Home_dir": os.getenv('HOME'), "present_Work_Dir": os.getcwd, "Current_date": datetime.today()}
print(My_system_details)

# print("formatted date: ",)
# print("formatted date: ", datetime.date.today())
# print("formatted date: ", datetime.date.isoformat(datetime.date.today()))
# print("formatted date: ", time.strftime("%H:%M"))
# time.strftime("%A %p")

#formatting html tag with module from standard library
# import html
# html.escape("This HTML fragment contains a <script>script</script> tag.")
# 'This HTML fragment contains a &lt;script&gt;script&lt;/script&gt; tag.'
# html.unescape("I &hearts; Python's &lt;standard library&gt;.")