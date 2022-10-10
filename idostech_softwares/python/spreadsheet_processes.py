from openpyxl import openpyxl as xl

xl.load_workbook('Transactions.xlsx')
Sheet = wb['Sheet1']
cell = sheet['a1']
cell = sheet.cell(1, 1)
print(cell.value)
