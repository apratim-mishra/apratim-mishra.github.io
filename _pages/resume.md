---
layout: archive
title: "Resume"
permalink: /resume/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

See resume at [resume](https://apratim-mishra.github.io/files/Resume_Apratim_.pdf)


Education
======
* Ph.D in Information Sciences, UIUC (current)
* Masters in Energy and Environmental Policy, University of Delaware, 2018
* B.E. in Chemical Engineering, BITS Pilani, 2016

Work experience
======
* AstraZeneca, Maryland, Illinois May 2023 – August 2023
    * Data Science Intern
• Utilized protein language models (PLMs) and graph neural networks (GNNs) to derive insights, explain relevant protein features, and predict complex biological behaviors, significantly improving modeling characteristics.
• Developed quantized deep learning models (parameter efficient methods) and improved model architecture to decrease computational and memory footprint and facilitate multi-GPU scalability for faster inference times.

* The Cline Centre for Advanced Social Research, Champaign, Illinois May 2021 – August 2021
  * Graduate NLP Programmer
• Engineered an NLP pipeline for quotation extraction and entity classification leveraging tools like spaCy and Stanford CoreNLP, and implemented testing strategies, evaluation metrics, and documentation updates.
• Fine-tuned transformer models like Bert and XLNet for precise quote classification, enhancing evaluation accuracy by focusing on 'span' matching to determine quote beginnings or endings.

* Reliable Power Alternatives Corporation, Garden City, New York Nov 2018 – Aug 2019
  * Energy Data Analyst
• Optimized data retrieval using SQL and developed Python-based Machine Learning pipelines with PySpark and scikit-learn, achieving a 15% cost reduction for clients.
• Supported model testing and deployment using Flask, providing clients with reports on key performance parameters.

* Delaware Army National Guard, Wilmington, Delaware
  * Research Intern September 2017 – January 2018
• Analyzed energy load trends using Python by employing models like Arima, XGBoost, LGBMBoost, and LSTMs.
• Performed one-sample and two-sample statistical tests to verify data integrity for clients and benchmark outcomes.
  
* NYC Department of Citywide Administrative Services, New York City, New York
  * Energy Efficiency Intern June 2017- August 2017
• Developed an interactive dashboard in Tableau to visualize core business KPIs based on cost savings.

Skills
======
* Python, PyTorch, TensorFlow, Keras, DeepSpeed, SQL
    * Lightning, Ignite, nltk, scikit-learn
* Git, Aws, Slurm, Tableau

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
