# -*- coding: utf-8 -*-
"""Grizzly Insights.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1h0s2zvpImo0iT2V-4f-oap5x7Y2aX0Ym

# Introduction
One of the greatest challenges for GGC students pursuing an IT degree is linking the classes offered by GGC to potential jobs. Because of this, upcoming graduates may not know what jobs to apply for according to their own skillset. To remedy this, Grizzly Insights will connect the coursework of each class to different job requirements over all the IT concentrations.

</br>**Goals**</br>
The goal of Grizzly Insights is to create a website that students can see which it skills is requred for different entry level jobs; students should also see which classes correspond to the previously mentioned it skills.This would allow students to use this website as a guideline to decide which classes to are the most important for them to take.

</br>**Problem Statement**</br>
In order to give the best guideline for upcoming IT graduates, our team must collect recent data that lists job titles, salaries, and related it skills accross four different concentrations.
"""

#Placeholder for heading

"""# Data Collection
To keep the data relevant, our team requires data from the past year or so; the only way to get this type of data is to web scrape off of different job listing websites. 
<br>
**Webscraper** <br>
The webscaping method we used it the webscraping extension on google chrome:
<br>
https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn?hl=en 
<br>
For instructions on how to use this webscraper, our team followed this video: <br>
https://www.youtube.com/watch?v=aClnnoQK9G0
<br>
By following the previous video's instructions, our group scrapped data for the four concentrations across different job posting websites (simply hired and indeed), (which job website used for the different scrapes are in the name of the file ex: indeed_SofDev.csv)





"""

#Placeholder for heading

"""# Data Importing and Data Cleaning
(so far) we have 5 different datafiles for 4 different concentrations; each file are ordered differently and the skill columns are a mess <br>
The mess in the job files include: <br>
1.   The multiple skills for each job maks the job information duplicate for each skill
2.   The job skills are spread out across many columns (edit: redid the scrapes with this; now have problem 3)
3.   The job skills are compressed into one field (with no spaces in-between)

**Dealing with duplicate information:**

**Dealing with compressed fields:**
"""

