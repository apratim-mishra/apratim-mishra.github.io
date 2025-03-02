---
layout: archive
title: "Resume"
permalink: /resume/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="resume-header">
  <h1>Apratim Mishra</h1>
  <p>PhD student in Information Sciences at University of Illinois at Urbana-Champaign</p>
  <div class="resume-download">
    <a href="{{ base_path }}/files/Resume_Apratim.pdf" class="btn btn--primary"><i class="fas fa-download"></i> Download Resume (PDF)</a>
  </div>
</div>

<div class="resume-section">
  <h2><i class="fas fa-graduation-cap"></i> Education</h2>
  <div class="resume-item">
    <h3>Ph.D. in Information Sciences</h3>
    <p>University of Illinois at Urbana-Champaign (UIUC) <span class="date">Current</span></p>
  </div>
  <div class="resume-item">
    <h3>Masters in Energy and Environmental Policy</h3>
    <p>University of Delaware <span class="date">2018</span></p>
  </div>
  <div class="resume-item">
    <h3>B.E. in Chemical Engineering</h3>
    <p>Birla Institute of Technology and Science (BITS) Pilani <span class="date">2016</span></p>
  </div>
</div>

<div class="resume-section">
  <h2><i class="fas fa-briefcase"></i> Work Experience</h2>
  
  <div class="resume-item">
    <h3>Data Science Intern</h3>
    <p class="organization">AstraZeneca, Maryland, Illinois <span class="date">May 2023 – August 2023</span></p>
    <ul>
      <li>Utilized protein language models (PLMs) and graph neural networks (GNNs) to derive insights, explain relevant protein features, and predict complex biological behaviors, significantly improving modeling characteristics.</li>
      <li>Developed quantized deep learning models and improved model architecture to decrease computational and memory footprint and facilitate multi-GPU scalability for faster inference times.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Graduate NLP Programmer</h3>
    <p class="organization">The Cline Centre for Advanced Social Research, Champaign, Illinois <span class="date">May 2021 – August 2021</span></p>
    <ul>
      <li>Engineered an NLP pipeline for quotation extraction and entity classification leveraging tools like spaCy and Stanford CoreNLP.</li>
      <li>Implemented testing strategies, evaluation metrics, and documentation updates.</li>
      <li>Fine-tuned transformer models like Bert and XLNet for precise quote classification, enhancing evaluation accuracy by focusing on 'span' matching.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Energy Data Analyst</h3>
    <p class="organization">Reliable Power Alternatives Corporation, Garden City, New York <span class="date">Nov 2018 – Aug 2019</span></p>
    <ul>
      <li>Optimized data retrieval using SQL and developed Python-based Machine Learning pipelines with PySpark and scikit-learn, achieving a 15% cost reduction for clients.</li>
      <li>Supported model testing and deployment using Flask, providing clients with reports on key performance parameters.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Research Intern</h3>
    <p class="organization">Delaware Army National Guard, Wilmington, Delaware <span class="date">September 2017 – January 2018</span></p>
    <ul>
      <li>Analyzed energy load trends using Python by employing models like Arima, XGBoost, LGBMBoost, and LSTMs.</li>
      <li>Performed one-sample and two-sample statistical tests to verify data integrity for clients and benchmark outcomes.</li>
    </ul>
  </div>

  <div class="resume-item">
    <h3>Energy Efficiency Intern</h3>
    <p class="organization">NYC Department of Citywide Administrative Services, New York City, New York <span class="date">June 2017- August 2017</span></p>
    <ul>
      <li>Developed an interactive dashboard in Tableau to visualize core business KPIs based on cost savings.</li>
    </ul>
  </div>
</div>

<div class="resume-section">
  <h2><i class="fas fa-laptop-code"></i> Skills</h2>
  
  <div class="skills-grid">
    <div class="skill-category">
      <h3>Programming & Frameworks</h3>
      <ul>
        <li><strong>Languages:</strong> Python, R</li>
        <li><strong>Deep Learning:</strong> PyTorch, TensorFlow, Keras</li>
        <li><strong>Optimization:</strong> DeepSpeed, Accelerate</li>
      </ul>
    </div>
    
    <div class="skill-category">
      <h3>Machine Learning & NLP</h3>
      <ul>
        <li><strong>Libraries:</strong> scikit-learn, Nltk, spaCy</li>
        <li><strong>Models:</strong> BERT, XLNet, GPT, LLama, Mistral, Phi</li>
      </ul>
    </div>
    
    <div class="skill-category">
      <h3>Data & Visualization</h3>
      <ul>
        <li><strong>Data Management:</strong> SQL</li>
        <li><strong>Visualization:</strong> Tableau, Power BI</li>
      </ul>
    </div>
    
    <div class="skill-category">
      <h3>Tools & Platforms</h3>
      <ul>
        <li><strong>Version Control:</strong> Git</li>
        <li><strong>Cloud:</strong> AWS, GCP</li>
        <li><strong>Scheduling:</strong> Slurm</li>
      </ul>
    </div>
  </div>
</div>

<style>
  .resume-header {
    text-align: center;
    margin-bottom: 2em;
    border-bottom: 2px solid #f2f3f3;
    padding-bottom: 1em;
  }
  
  .resume-download {
    margin: 1.5em 0;
  }
  
  .resume-section {
    margin-bottom: 2em;
    border-bottom: 1px solid #f2f3f3;
    padding-bottom: 1em;
  }
  
  .resume-section h2 {
    color: #494e52;
    border-bottom: 1px solid #f2f3f3;
    padding-bottom: 0.5em;
  }
  
  .resume-item {
    margin-bottom: 1.5em;
  }
  
  .resume-item h3 {
    margin-bottom: 0.25em;
    color: #494e52;
  }
  
  .organization {
    font-weight: bold;
    margin-bottom: 0.5em;
  }
  
  .date {
    font-style: italic;
    color: #646769;
    float: right;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5em;
  }
  
  .skill-category {
    background-color: #f8f9fa;
    padding: 1em;
    border-radius: 5px;
  }
  
  .skill-category h3 {
    margin-top: 0;
    border-bottom: 1px solid #e9ecef;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
  }
  
  .skill-category ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0.5em;
  }
  
  .skill-category li {
    margin-bottom: 0.5em;
  }
</style>

<!-- Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul> -->
  
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
