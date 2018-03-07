# Written by Stephen Grinich for the Instacart Shopper Challenge, part 2. 
# NOTE: the sqlite file must been in the same directory as this script. 

from sys import argv
from datetime import datetime, timedelta
import sqlite3

def main():
    script, startDate, endDate = argv
    beginningFirstWeek = getStartOfWeek(startDate)
    endingLastWeek = getEndOfWeek(endDate)

    conn = sqlite3.connect('applicants.sqlite3')
    c = conn.cursor()
     
    mapping = {}

    sqlQuery = 'SELECT created_at, workflow_state FROM APPLICANTS WHERE created_at '
    sqlQuery += ">= '" + str(beginningFirstWeek) + "' AND created_at <= '" + str(endingLastWeek) + "'" 

    for row in c.execute(sqlQuery):    
        date = getDateFromRow(row)
        state= getStateFromRow(row)
        
        startDate = str(getStartOfWeek(date))
        startDateString = startDate.split(" ")[0]

        if startDateString not in mapping:
            mapping[startDateString] = {}
            mapping[startDateString][state] = 1
            mapping[startDateString]['count'] = 1
        else:
            if state not in mapping[startDateString]:
                mapping[startDateString][state] = 1
            else:
                mapping[startDateString][state] += 1
            
            mapping[startDateString]['count'] += 1

    printValues(mapping)

def printValues(mapping):
    print 'count,week,workflow_state'
    for week in mapping.keys():
        for value in mapping[week]:
            print str(mapping[week][value]) + ',' + str(week) + ',' + str(value)

def getStartOfWeek(date):
    dt = datetime.strptime( date, "%Y-%m-%d")
    start = dt - timedelta(days=dt.weekday())
    return start

def getEndOfWeek(date):
    start = getStartOfWeek(date)
    end = start + timedelta(days=6)
    return end

def getDateFromRow(row):
    return row[0].split(" ")[0]

def getStateFromRow(row):
    return row[1]

main()