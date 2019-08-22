#!/usr/bin/env python
# -*- coding: utf-8 -*-
from operator import itemgetter
import io

def get_data():
    array = []
    with open("registrations.csv") as f:
        for line in f:
            lis = line.split(',')
            full_name = lis[1]
            full_name_lis = full_name.split(' ')
            last_name = full_name_lis[-1]
            lis.insert(2, last_name)
            array.append(lis)

        print(array[10][1])  
        print(array[10][2]) 

def get_data_and_sort():
    array = []
    with open("registrations.csv") as f:
        for line in f:
            lis = line.split(',')
            full_name = lis[1]
            full_name_lis = full_name.split(' ')
            last_name = full_name_lis[-1].lower()
            lis.insert(2, last_name)
            array.append(lis)
    sorted_array = sorted(array, key=itemgetter(2))


    for index, lis in enumerate(sorted_array):
        print(str(index) + ' ' + lis[1] + ' '+ lis[11]+ ' '+ lis[12]) 
     

def get_data_column_names():
    with open("registrations.csv") as f:
        for line in f:
            lis = line.split(',')

            for index, item in enumerate(lis):
                print(str(index)+ ' ' + item)
            break     
                

def get_data_and_sort_and_dump_to_file():
    array = []
    with open("registrations.csv") as f:
        for line in f:
            lis = line.split(',')
            full_name = lis[1]
            full_name_lis = full_name.split(' ')
            last_name = full_name_lis[-1].lower()
            lis.insert(2, last_name)
            array.append(lis)
    sorted_array = sorted(array, key=itemgetter(2))
    #print(sorted_array[6][1])  
    #print(array[6][1])
    with io.open('./output.csv', 'w') as output_file:
        for row in sorted_array:
            output_file.write(row[1].decode('utf-8')+ ','+ row[2].decode('utf-8')+'\n')

def get_list_of_filtered_people():
    array = []
    with open("registrations.tsv") as f:
        for line in f:
            lis = line.split('\t')
            full_name = lis[1]
            full_name_lis = full_name.split(' ')
            last_name = full_name_lis[-1].lower()
            lis.insert(2, last_name)
            array.append(lis)
    sorted_array = sorted(array, key=itemgetter(2))

    number_of_people = 0
    for index, lis in enumerate(sorted_array):
        if lis[11] != '':
            date = lis[11].split(' ')[0].split('/')[0]
            if 'Fal' in lis[15] and int(date) > 22:
                if lis[16] == '':
                    number_of_people+=1
                else:          
                    number_of_people+=int(lis[16])
                print(str(index) + ' ' + lis[1] + ' '+ lis[15]+ ' '+ lis[16] + ' ' + date) 
    print(number_of_people)    



def get_unregistered_people():
    array = []
    registered_people = []
    with open("registrations.tsv") as f:
        for line in f:
            lis = line.split('\t')
            full_name = lis[1]
            registered_people.append(full_name.lower())
            full_name_lis = full_name.split(' ')
            last_name = full_name_lis[-1].lower()
            lis.insert(2, last_name)
            array.append(lis)
    sorted_array = sorted(array, key=itemgetter(2)) 

    with open("contributions.tsv") as a:
        counter = 0
        for aline in a:
            alis = aline.split('\t')
            authors = alis[8].lower().split(';')
            #for author in authors:     
                #if author not in registered_people:
            counter+=1
            print(authors[0])
        print(counter)    



if __name__ == '__main__':
    #get_data()
    #get_data_and_sort()
    #get_data_and_sort_and_dump_to_file()
    #get_data_column_names()
   
    #get_list_of_filtered_people()
    get_unregistered_people()
