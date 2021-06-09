file = open('testfile.txt','a') 

for i in range(0, 30): 
    file.write(str(i)+'\n')
 
file.close() 