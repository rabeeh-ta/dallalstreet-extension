import csv

inputFile = open("./bseEquityList.csv", "r")
outputFile = open("./cleanData.csv", "w", newline="")

reader = csv.reader(inputFile)
writer = csv.writer(outputFile)

header = []
header = ["Company Name", "Ticker Symbol"]
writer.writerow(header)
next(reader)

rows = []

for row in reader:
    if row[8] == "-":
        pass
    else:
        item = []
        item.append(row[3])
        item.append(row[2])

        rows.append(item)

print(header)

for row in rows:
    writer.writerow(row)

inputFile.close()
outputFile.close()
