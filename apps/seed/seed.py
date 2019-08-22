from graphqlclient import GraphQLClient
from numpy import genfromtxt
from operator import itemgetter

client = GraphQLClient('http://localhost:4000/graphql')

def create_participant():
  result = client.execute('''
  mutation {
    createParticipant (input: {
      email: "elizaveta@gmail.com",
      name: "Elizaveta Astapova",
      title: "Mrs"
    }) {
      id
    }
  }
  ''')
  print(result)

def upload_many_participants_from_file():
  with open("registrations.csv") as f:
    # Собрать массив цикле через append
    # Разбить 1-й ю колонку по пробелу
    #array = [line.split(',') for line in f]
    #sorted_array = sorted(array, key=itemgetter(1))
    #print(sorted_array[7][1])

    array = []
    for line in f:
      lis = line.split(',')
      last_name = 



#def get_data():
#    my_data = genfromtxt('registrations.csv', delimiter=',')
#    return my_data

#def sort_data():
#  array = get_data()
#  sorted_array = numpy.sort(array, axis=1, kind='quicksort', order=None)
#  return sorted_array



if __name__ == '__main__':
  upload_many_participants_from_file()
# sorted_data = get_data()
# print(sorted_array[:,1])
