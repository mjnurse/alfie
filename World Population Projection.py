import matplotlib.pyplot as plt
year = ['1990','2010','2020','2100']
pop = ['2.538','2.57','2.62','10.85']

plt.plot(year,pop)

plt.xlabel("Year")
plt.ylabel('Population')
plt.title("World Population Projection")
plt.yticks([0,2,4,6,8,10], 
            ['0','2B','4B','6B','8B','10B'])

plt.show()

HELLO

