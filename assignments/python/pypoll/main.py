#Assignment 3.2 - PyPoll by Jeffrey Box (Jun 19, 2018)
#Objective: help a small, rural town modernize its vote-counting process by analyzing data 
#Up until now, Uncle Cleetus had been trustfully tallying them one-by-one,but unfortunately, his concentration isn't what it used to be

#bring in necessary python modules from library
import os
import csv

# Path to collect data from the source file
usercsv = "election_data.csv"

#create the method and convert the input to a list
def analyzeVoterData(VoterData):
    data = list(VoterData)

    #The total number of votes cast
    votecount = len(data)

    #checkpoint:print(votecount)

    #A unique list of candidates who received votes
    CandidateList = []
    CountyList = []
    for candidate in data:
        if candidate[2] not in CandidateList:
            CandidateList.append(candidate[2])
        if candidate[1] not in CountyList:
            CountyList.append(candidate[1])

    #checkpoint: print(Candidatelist)

    #The total number of votes each candidate won
    TotalVotes = []
    for row in data:
       TotalVotes.append(row[2])

    #checkpoint: print(TotalVotes)
    CandidateVotes = []
    maxvotes = 0
    for x in CandidateList:
        count = TotalVotes.count(x)
        CandidateVotes.append(count)
        if count > maxvotes:
            maxvotes = count
            winner = x

    CandidateVotesString = ["(" + str(vote) + ")" for vote in CandidateVotes]

    #checkpoint: print(CandidateVotes)
    
    #The percentage of votes each candidate won... type cast for % - percentvotes = float(totalvotes / total)
    CandidatePercents = [round(vote/votecount*100,2) for vote in CandidateVotes]
    CandidatePercString = [str(percstring) + "%" for percstring in CandidatePercents]
    #checkpoint:print(CandidatePercents)

    #zip it up and make a dictionary
    dictionary = {z[0]:list(z[1:]) for z in zip(CandidateList, CandidatePercString, CandidateVotesString)}

    #In addition, your final script should both print the analysis to the terminal and export a text file with the results.
    print(f"Uncle Cleetus: Election Results")
    print(f"------------------------------")
    print(f'Total Votes: {votecount}')
    print(f"------------------------------")
    for k,v in dictionary.items():
        print(str(k) + ': ' + str(v).strip("[]").replace("'",""))
    print(f"------------------------------")
    print(f'Winner: {winner}!!!!!!!!!')
    print(f"------------------------------")

    with open("PyPoll.txt", "w") as textfile:
        textfile.write(f'Uncle Cleetus: Election Results\n')
        textfile.write(f'------------------------------\n')
        textfile.write(f'Total Votes: {votecount}\n')
        textfile.write(f'------------------------------\n')
        #textfile.write(f'{dictionary}')
        for k,v in dictionary.items():
            textfile.write(str(k) + ': ' + str(v).strip("[]").replace("'","") + '\n')
        textfile.write(f'------------------------------\n')
        textfile.write(f'Winner: {winner}!!!!!!!!!\n')
        textfile.write(f'------------------------------\n')
        textfile.close()

# Read in the CSV file
with open(usercsv, 'r') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')
    header = next(csvreader)
    analyzeVoterData(csvreader)