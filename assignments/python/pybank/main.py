#Assignment3.1 - PyBank by Jeffrey Box (Jun 19, 2018)
#Objective: create a Python script that analyzes  finance information from "budget_data" and performs calculations

#bring in python modules from library
import os
import csv

#Path to collect data from the source file
usercsv = "budget_data.csv"

#create the function to call upon later
def analyzeBudgetData(BudgetData):

    #The total number of months included in the dataset - uses list() to convert the iterable to a list and len() to count the rows
    data = list(BudgetData)
    datecount = len(data)

    #checkpoint: print(datecount)

    #The total net amount of "Profit/Losses" over the entire period
    totalrev = 0
    for row in data:
        totalrev += int(row[1])

    #checkpoint:print("$" + str(totalrev))

    #The average change in "Profit/Losses" between months over the entire period
    avgrev = (float(totalrev)/datecount)

    #checkpoint:print(f'$+{avgrev:.2f}')
        
    #The greatest increase in profits (date and amount) over the entire period
    maxincrease = 0
    mindecrease = 0
    for row in data:
        if int(row[1]) > maxincrease:
            maxincrease = int(row[1])
            maxdate = str(row[0])
        elif int(row[1]) < mindecrease:
            mindecrease = int(row[1])
            mindate = str(row[0])

    #checkpoint print(maxdate + " " + str(maxincrease))
    #checkpoint print(mindate + " " + str(mindecrease))

    #print to the terminal
    print("Financial Analysis")
    print("----------------------------")
    print(f'Total Months: {datecount}')
    print(f'Total: $ + {str(totalrev)}')
    print(f'Average Change: ${avgrev:.2f}')
    print(f'Greatest Increase in Profits: {maxdate} $({maxincrease})')
    print(f'Greatest Decrease in Profits: {mindate} $({mindecrease})')

    #export to a text file 
    with open("PyBank.txt", "w") as textfile:
        textfile.write(f'Financial Analysis\n')
        textfile.write(f'----------------------------\n')
        textfile.write(f'Total Months: {datecount}\n')
        textfile.write(f'Total: $ + {str(totalrev)}\n')
        textfile.write(f'Average Change: ${avgrev:.2f}\n')
        textfile.write(f'Greatest Increase in Profits: {maxdate} $({maxincrease})\n')
        textfile.write(f'Greatest Decrease in Profits: {mindate} $({mindecrease})\n')

# Read in the CSV file
with open(usercsv, 'r') as csvfile:
    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')
    header = next(csvreader)
    #run the function
    analyzeBudgetData(csvreader)